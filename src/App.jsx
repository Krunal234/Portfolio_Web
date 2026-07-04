import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import { useRevealAnimation } from './utils/reveal';
import Header from './components/Header';
import ContactRail from './components/ContactRail';
import Progress from './components/Progress';
import Hero from './components/Hero';
import IntroStrip from './components/IntroStrip';
import Expertise from './components/Expertise';
import Architecture from './components/Architecture';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [theme, setTheme] = useTheme();
  const setupRevealObserver = useRevealAnimation();

  useEffect(() => {
    // Setup reveal animation observer
    const observer = setupRevealObserver();

    // Cleanup on unmount
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [setupRevealObserver]);

  return (
    <>
      <Progress />
      <Header theme={theme} onThemeChange={setTheme} />
      <ContactRail />
      <main id="top">
        <Hero />
        <IntroStrip />
        <Expertise />
        <Architecture />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
