export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-mono font-bold text-xl">
            <span style={{ color: '#00F5FF' }}>B</span>
            <span className="text-white">K</span>
            <span className="text-violet-400">.</span>
          </span>
        </div>
        <p className="font-mono text-xs text-muted text-center">
          Designed & Developed with <span className="text-red-400">{"<#code>"}</span> by{' '}
          <span className="text-white">Kuldip Boghara</span> · {year}
        </p>
        {/* <p className="font-mono text-xs text-muted">
          Built with React + Vite
        </p> */}
      </div>
    </footer>
  );
}
