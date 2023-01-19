import React from 'react';
import styles from './FeedbackButtons.module.css';

const FeedbackButtons = ({ options, newFeedback }) => (
  <div className={styles.feedbackButtons}>
    <p className={styles.title}>Please leave feedback</p>
    <div className={styles.buttons}>
      {options.map(option => (
        <button
          key={option}
          id={option}
          type="button"
          className={styles.button}
          onClick={newFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default FeedbackButtons;
