import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/anise.svg';
import Button from './Button';

interface HeaderProps {
  onDownloadClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick }) => {
  const [active, setActive] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const featuresSection = document.getElementById('features');
      const faqSection = document.getElementById('faq');
      if (aboutSection && featuresSection && faqSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const featuresRect = featuresSection.getBoundingClientRect();
        const faqRect = faqSection.getBoundingClientRect();
        if (aboutRect.top <= 80 && aboutRect.bottom > 80) {
          setActive('about');
        } else if (featuresRect.top <= 80 && featuresRect.bottom > 80) {
          setActive('features');
        } else if (faqRect.top <= 80 && faqRect.bottom > 80) {
          setActive('faq');
        } else {
          setActive('home');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActive(section);
    setMobileNavOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <button
          className={styles.mobileLogoBtn}
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <img src={logo} alt="Anise Logo" className={styles.logo} />
        </button>
        <span className={styles.brand}>Anise</span>
      </div>
      <nav className={`${styles.nav} ${mobileNavOpen ? styles.open : ''}`}>
        <a
          href="#"
          className={active === 'home' ? styles.active : ''}
          onClick={() => handleNavClick('home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={active === 'about' ? styles.active : ''}
          onClick={() => handleNavClick('about')}
        >
          About
        </a>
        <a
          href="#features"
          className={active === 'features' ? styles.active : ''}
          onClick={() => handleNavClick('features')}
        >
          Features
        </a>
        <a
          href="#faq"
          className={active === 'faq' ? styles.active : ''}
          onClick={() => handleNavClick('faq')}
        >
          FAQ
        </a>
        <div className={styles.mobileOnlyBtns}>
          <a href="#" className={styles.mobileAuthBtn}>Sign In / Register</a>
          <a href="#" className={styles.mobileDownloadBtn} onClick={e => { e.preventDefault(); onDownloadClick(); }}>Download App</a>
        </div>
      </nav>
      <a href="#" className={styles.downloadBtn} onClick={e => { e.preventDefault(); onDownloadClick(); }}>Download App</a>
    </header>
  );
};

export default Header; 