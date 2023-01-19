import React from 'react';
import styles from './NoFeedback.module.css';

const NoFeedback = ({ message }) => (
  <div className={styles.feedbackStatistics}>
    <p className={styles.title}>Statistics</p>
    <p className={styles.title}>{message}</p>
  </div>
);

export default NoFeedback;
