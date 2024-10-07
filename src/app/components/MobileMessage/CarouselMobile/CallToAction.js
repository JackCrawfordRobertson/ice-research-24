import React from 'react';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <h1 className={styles.bigText}>Like What You See?</h1>
      <p className={styles.copyText}>
        Follow the same link on a desktop to investigate the full research.
      </p>
    </div>
  );
};

export default CallToAction;