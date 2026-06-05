import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import Loader from './components/ui/Loader';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Custom cursor — always on top */}
      <CustomCursor />

      {/* Loading screen */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main site — hidden during load */}
      {!loading && (
        <div className="min-h-screen bg-deep-space">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
