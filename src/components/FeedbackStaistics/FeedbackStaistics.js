import React from 'react';
import styles from './FeedbackStaistics.module.css';

const FeedbackStatistics = ({ good, neutral, bad, total, per }) => (
  <div className={styles.feedbackStatistics}>
    <p className={styles.title}>Statistics</p>
    <table className={styles.feedbackStatisticsTable}>
      <tbody>
        <tr className={styles.trBodyTable}>
          <td className={styles.tdBodyTable}>Good, pcs</td>
          <td className={styles.tdBodyTable}>{good}</td>
        </tr>
        <tr className={styles.trBodyTable}>
          <td className={styles.tdBodyTable}>Neutral, pcs</td>
          <td className={styles.tdBodyTable}>{neutral}</td>
        </tr>
        <tr className={styles.trBodyTable}>
          <td className={styles.tdBodyTable}>Bad, pcs</td>
          <td className={styles.tdBodyTable}>{bad}</td>
        </tr>
        <tr className={styles.trBodyTable}>
          <td className={styles.tdBodyTable}>Total, pcs</td>
          <td className={styles.tdBodyTable}>{total}</td>
        </tr>
        <tr className={styles.trBodyTable}>
          <td className={styles.tdBodyTable}>
            Positive feedback percentage, %
          </td>
          <td className={styles.tdBodyTable}>{per}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default FeedbackStatistics;
