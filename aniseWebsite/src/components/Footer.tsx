import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div>© {new Date().getFullYear()} Anise. All rights reserved.</div>
    <div style={{ marginTop: '0.5rem', fontSize: '1rem', color: 'var(--color-secondary)' }}>
      Based in London, UK | Contact: <a href="mailto:hello@anise.org" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>hello@anise.org</a>
    </div>
  </footer>
);

export default Footer; 