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

const bgColors = [
  '#f7f3ff',
  '#e0e7ff',
];

const Features: React.FC = () => {
  // Group features into rows of 2
  const featureRows = [];
  for (let i = 0; i < features.length; i += 2) {
    featureRows.push(features.slice(i, i + 2));
  }
  return (
    <main id="features" className={styles.featuresMainFull} style={{ scrollMarginTop: '90px' }}>
      <div className={styles.featuresHeader}>
        <h1 className={styles.heading}>Features</h1>
        <p className={styles.subheading}>
          Everything you need to create, manage, and grow your DAO—securely, transparently, and with ease.
        </p>
      </div>
      <section className={styles.featuresRows2x2}>
        {featureRows.map((row, rowIdx) => (
          <div
            className={styles.featureRow2x2}
            key={rowIdx}
            style={{ background: bgColors[rowIdx % bgColors.length] }}
          >
            {row.map((feature, idx) => (
              <div className={styles.featureCol2x2} key={feature.title}>
                <div className={styles.featureIconBig}>{feature.icon}</div>
                <div className={styles.featureTextBlockBig}>
                  <div className={styles.featureTitleBig}>{feature.title}</div>
                  <div className={styles.featureDescBig}>{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Features; 