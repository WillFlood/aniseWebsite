import React from 'react';
import styles from '../styles/Stats.module.css';

const stats = [
  { value: '10,000+', label: 'Tasks Completed Daily' },
  { value: '20+', label: 'Integrations' },
  { value: '99%', label: 'User Satisfaction' },
];

const Stats: React.FC = () => (
  <section className={styles.statsSection}>
    {stats.map((stat, idx) => (
      <div className={styles.stat} key={idx}>
        <div className={styles.value}>{stat.value}</div>
        <div className={styles.label}>{stat.label}</div>
      </div>
    ))}
  </section>
);

export default Stats; 