import React from 'react';
import styles from '../styles/Features.module.css';

const features = [
  {
    icon: '🛠️',
    title: 'Easy DAO Creation',
    description: 'Launch a DAO in minutes with intuitive templates and guided setup.'
  },
  {
    icon: '🔒',
    title: 'Secure & Transparent',
    description: 'All actions and treasury movements are recorded on the blockchain for full accountability.'
  },
  {
    icon: '🤝',
    title: 'Inclusive Governance',
    description: 'Voting and proposals are open to all members, ensuring every voice is heard.'
  },
  {
    icon: '📊',
    title: 'Treasury Management',
    description: 'Manage group funds with on-chain transparency and smart contract security.'
  },
  {
    icon: '🧩',
    title: 'Customisable Templates',
    description: 'Choose from a range of DAO templates or build your own for any purpose.'
  },
  {
    icon: '💡',
    title: 'Expert Consultancy',
    description: 'Get help, training, and research to maximise your DAO’s impact.'
  }
];

const Features: React.FC = () => (
  <main id="features" className={styles.featuresMain}>
    <h1 className={styles.heading}>Features</h1>
    <p className={styles.subheading}>
      Everything you need to create, manage, and grow your DAO—securely, transparently, and with ease.
    </p>
    <section className={styles.grid}>
      {features.map((feature, idx) => (
        <div className={styles.card} key={idx}>
          <div className={styles.icon}>{feature.icon}</div>
          <div className={styles.title}>{feature.title}</div>
          <div className={styles.description}>{feature.description}</div>
        </div>
      ))}
    </section>
  </main>
);

export default Features; 