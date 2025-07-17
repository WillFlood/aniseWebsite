import React from 'react';
import styles from '../styles/Hero.module.css';
import homeIcon from '../assets/home.svg';
import Button from './Button';
import Stats from './Stats';
import { Parallax } from 'react-scroll-parallax';

interface HeroProps {
  onDownloadClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadClick }) => {
  const handleSeeFeatures = () => {
    const el = document.getElementById('features');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className={styles.hero}>
      <div className={styles.textSection}>
        <h1>Organising Made Simpler.</h1>
        <p>
          Empower your community or team with democratic tools to organise, share responsibility, and make decisions—without heavy admin. Anise is built for groups who want to collaborate, contribute, and create change.
        </p>
        <div className={styles.buttonGroup}>
          <Button primary onClick={onDownloadClick}>Download App</Button>
          <Button onClick={handleSeeFeatures}>See Features</Button>
        </div>
        <Stats />
      </div>
      <div className={styles.illustrationSection}>
        <Parallax speed={-20}>
          <img src={homeIcon} alt="Home Icon" />
        </Parallax>
      </div>
    </section>
  );
};

export default Hero; 