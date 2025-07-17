import React, { useEffect, useState } from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/anise.svg';
import Button from './Button';

interface HeaderProps {
  onDownloadClick: () => void;
  onEnquiriesClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDownloadClick, onEnquiriesClick }) => {
  const [active, setActive] = useState('home');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const featuresSection = document.getElementById('features');
      const faqSection = document.getElementById('faq');
      const resourcesSection = document.getElementById('resources');
      let found = false;
      if (aboutSection && featuresSection && faqSection && resourcesSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const featuresRect = featuresSection.getBoundingClientRect();
        const faqRect = faqSection.getBoundingClientRect();
        const resourcesRect = resourcesSection.getBoundingClientRect();
        if (aboutRect.top <= 80 && aboutRect.bottom > 80) {
          setActive('about'); found = true;
        } else if (featuresRect.top <= 80 && featuresRect.bottom > 80) {
          setActive('features'); found = true;
        } else if (faqRect.top <= 80 && faqRect.bottom > 80) {
          setActive('faq'); found = true;
        } else if (resourcesRect.top <= 80 && resourcesRect.bottom > 80) {
          setActive('resources'); found = true;
        }
      }
      if (!found) setActive('home');
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    setActive(section);
    setMobileNavOpen(false);
    // Scroll to the section if not home
    if (section !== 'home') {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        {/* Show logo as button on mobile, logo on desktop */}
        <button
          className={styles.mobileLogoBtn}
          onClick={() => setMobileNavOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className={styles.mobileLogoIcon}>
            <img src={logo} alt="Anise Logo" className={styles.mobileLogoImg} />
          </span>
          <span className={styles.mobileLogoText}>Anise</span>
        </button>
        <img src={logo} alt="Anise Logo" className={styles.logo} />
        <span className={styles.brand}>Anise</span>
      </div>
      <nav className={`${styles.nav} ${mobileNavOpen ? styles.open : ''}`}>
        <div className={styles.desktopNavLinks}>
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
          <a
            href="#resources"
            className={active === 'resources' ? styles.active : ''}
            onClick={() => handleNavClick('resources')}
          >
            Resources
          </a>
          <a
            href="#"
            className={styles.enquiriesBtn}
            onClick={e => { e.preventDefault(); if (typeof onEnquiriesClick === 'function') onEnquiriesClick(); }}
          >
            Enquiries
          </a>
        </div>
        {/* Mobile dropdown menu */}
        {mobileNavOpen && (
          <div className={styles.mobileDropdownMenu}>
            <a onClick={() => handleNavClick('home')} className={active === 'home' ? styles.active : ''}>Home</a>
            <a onClick={() => handleNavClick('about')} className={active === 'about' ? styles.active : ''}>About</a>
            <a onClick={() => handleNavClick('features')} className={active === 'features' ? styles.active : ''}>Features</a>
            <a onClick={() => handleNavClick('faq')} className={active === 'faq' ? styles.active : ''}>FAQ</a>
            <a onClick={() => handleNavClick('resources')} className={active === 'resources' ? styles.active : ''}>Resources</a>
            <a onClick={e => { e.preventDefault(); if (typeof onEnquiriesClick === 'function') onEnquiriesClick(); }} className={styles.enquiriesBtn}>Enquiries</a>
          </div>
        )}
      </nav>
      <a href="#" className={styles.downloadBtn} onClick={e => { e.preventDefault(); onDownloadClick(); }}>Download App</a>
    </header>
  );
};

export default Header; 