import { useState } from 'react';

export default function Header({ theme, onThemeChange }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(false);
  };

  return (
    <header className="site-header" data-reveal>
      <a className="brand" href="#top" aria-label="Krunal Goswami home">
        <span className="brand-mark">KG</span>
        <span>Krunal Goswami</span>
      </a>
      <nav className={`nav-links ${navOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        <a href="#expertise" onClick={handleNavClick}>Expertise</a>
        <a href="#systems" onClick={handleNavClick}>Systems</a>
        <a href="#experience" onClick={handleNavClick}>Experience</a>
        <a href="#projects" onClick={handleNavClick}>Projects</a>
        <a href="#contact" onClick={handleNavClick}>Contact</a>
      </nav>
      <div className="theme-switcher" role="group" aria-label="Select site theme">
        <button 
          className={`theme-option ${theme === 'professional' ? 'active' : ''}`}
          type="button" 
          data-theme-option="professional" 
          aria-pressed={theme === 'professional'}
          onClick={() => onThemeChange('professional')}
        >
          Professional
        </button>
        <button 
          className={`theme-option ${theme === 'classic' ? 'active' : ''}`}
          type="button" 
          data-theme-option="classic" 
          aria-pressed={theme === 'classic'}
          onClick={() => onThemeChange('classic')}
        >
          Dev-Mode
        </button>
      </div>
      <button 
        className="nav-toggle" 
        type="button" 
        aria-label="Open navigation" 
        aria-expanded={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
