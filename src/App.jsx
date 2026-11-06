import { useEffect, useState } from 'react';
import Work from './Work';
import { jobs, education, skills } from './data';
import { Sun, Moon, Download } from './icons';

const EMAIL = 'bogharakuldip@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/kuldip-boghara/';
const GITHUB = 'https://github.com/KuldipBoghara';
const RESUME = '/Kuldip_Boghara_Resume.pdf';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* private mode */ }
  }, [theme]);

  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button className="icon-btn" onClick={() => setTheme(next)} aria-label={`Switch to ${next} theme`} title={`Switch to ${next} theme`}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap">
        <a href="#top" className="brand">Kuldip Boghara</a>
        <nav className="nav">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn" href={RESUME} download>Resume <Download /></a>
        <ThemeToggle />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="status mono">Taking on freelance work · remote</p>
        <h1 className="serif">
          I build business websites and the <em>admin panels</em> that run them.
        </h1>
        <p className="lead">
          I'm a full-stack developer with three-plus years of React, Node.js and MongoDB, first with teams in
          Toronto and now at a product agency in Ahmedabad. Most of my work is the part customers never see:
          dashboards, CMSs, role-based access, build pipelines, secure APIs. I also build the public website
          that sits in front of all that.
        </p>
        <div className="actions">
          <a className="btn btn-solid" href="#work">See the work</a>
          <a className="btn" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <dl className="facts">
          <div><dt className="mono">Now</dt><dd>MERN developer at Latitude Technolabs, leading a 2-person backend team</dd></div>
          <div><dt className="mono">Before</dt><dd>Digital Attractions (CN Tower) and Harsh Infotech, Toronto</dd></div>
          <div><dt className="mono">Based in</dt><dd>Ahmedabad, India (IST)</dd></div>
          <div><dt className="mono">Good fit for</dt><dd>Redesigns, CMS-driven sites, dashboards, admin panels</dd></div>
        </dl>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="section-head"><h2 className="serif">Experience</h2></div>
        <div className="jobs">
          {jobs.map((j) => (
            <div className="job" key={j.company}>
              <p className="mono muted">{j.period}</p>
              <div>
                <h3>{j.role}</h3>
                <p className="where">{j.company} · {j.place}</p>
                <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
          ))}
          {education.map(([what, where, when]) => (
            <div className="job" key={what}>
              <p className="mono muted">{when}</p>
              <div>
                <h3>{what}</h3>
                <p className="where">{where}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="section-head"><h2 className="serif">What I work with</h2></div>
        <dl className="skills">
          {skills.map(([k, v]) => (
            <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <p className="mono muted">Contact</p>
        <h2 className="serif" style={{ marginTop: 12 }}>
          Have a site to redesign or a panel to build? <a href={`mailto:${EMAIL}`}>Email me.</a>
        </h2>
        <p className="muted" style={{ marginTop: 16 }}>I usually reply within a day.</p>
        <div className="actions">
          <a className="btn btn-solid" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href={RESUME} download>Resume (PDF)</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} Kuldip Boghara</span>
          <span>Client screens shown with sample data</span>
        </div>
      </footer>
    </>
  );
}
