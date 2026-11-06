import { useEffect, useRef, useState } from 'react';
import { projects, alsoBuilt } from './data';
import { Arrow } from './icons';

const filters = [
  ['all', 'All'],
  ['site', 'Websites'],
  ['app', 'Platforms'],
];

function Shots({ project, eager, onOpen }) {
  const [i, setI] = useState(0);
  const n = project.shots.length;
  const go = (d) => setI((v) => (v + d + n) % n);

  return (
    <div className="shots">
      <div className="shots-frame">
        <div className="shots-strip" style={{ transform: `translateX(-${i * 100}%)` }}>
          {project.shots.map((s, k) => (
            <button key={s.src} onClick={() => onOpen(s)} tabIndex={k === i ? 0 : -1} aria-label={`Enlarge: ${s.caption}`}>
              <img
                src={s.src}
                alt={`${project.title} — ${s.caption}`}
                width="1440"
                height="900"
                loading={eager && k === 0 ? 'eager' : 'lazy'}
                className={s.fit === 'contain' ? 'contain' : undefined}
              />
            </button>
          ))}
        </div>
      </div>
      <div className="shots-bar">
        <p className="shots-caption">{project.shots[i].caption}</p>
        <div className="dots">
          {project.shots.map((s, k) => (
            <button key={s.src} aria-label={`Screenshot ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />
          ))}
        </div>
        <button className="icon-btn" onClick={() => go(-1)} aria-label="Previous screenshot"><Arrow dir="left" /></button>
        <button className="icon-btn" onClick={() => go(1)} aria-label="Next screenshot"><Arrow /></button>
      </div>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState('all');
  const [edges, setEdges] = useState({ start: true, end: false });
  const [zoom, setZoom] = useState(null);
  const track = useRef(null);
  const dialog = useRef(null);

  const list = projects.filter((p) => filter === 'all' || p.type === filter);

  const updateEdges = () => {
    const t = track.current;
    if (t) setEdges({ start: t.scrollLeft < 8, end: t.scrollLeft + t.clientWidth > t.scrollWidth - 8 });
  };

  useEffect(() => {
    track.current.scrollTo({ left: 0 });
    updateEdges();
  }, [filter]);

  useEffect(() => {
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);

  const page = (dir) => {
    const t = track.current;
    const card = t.firstElementChild;
    t.scrollBy({ left: dir * (card.offsetWidth + 20), behavior: 'smooth' });
  };

  const open = (s) => {
    setZoom(s);
    dialog.current.showModal();
  };

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <h2 className="serif">Selected work</h2>
            <p>
              Business websites and the admin panels behind them. Most of my platform work sits behind a client
              login, so those screens are rebuilt from the real code with sample data.
            </p>
          </div>
          <div className="work-tools">
            <div className="filters" role="group" aria-label="Filter projects">
              {filters.map(([key, label]) => (
                <button key={key} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}</button>
              ))}
            </div>
            <button className="icon-btn" onClick={() => page(-1)} disabled={edges.start} aria-label="Previous project"><Arrow dir="left" /></button>
            <button className="icon-btn" onClick={() => page(1)} disabled={edges.end} aria-label="Next project"><Arrow /></button>
          </div>
        </div>

        <div className="track" ref={track} onScroll={updateEdges}>
          {list.map((p, idx) => (
            <article className="project" key={p.title}>
              <Shots project={p} eager={idx === 0} onOpen={open} />
              <div className="project-body">
                <p className="project-kind mono">{p.kind} · {p.meta}</p>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                <div className="stack">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
                {p.live && (
                  <div className="project-links">
                    <a href={p.live} target="_blank" rel="noopener noreferrer">Visit the live site ↗</a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="also"><span className="muted">Also built: </span>{alsoBuilt}</p>
      </div>

      <dialog className="lightbox" ref={dialog} onClick={() => dialog.current.close()}>
        {zoom && (
          <>
            <img src={zoom.src} alt={zoom.caption} />
            <p>{zoom.caption} · click anywhere or press Esc to close</p>
          </>
        )}
      </dialog>
    </section>
  );
}
