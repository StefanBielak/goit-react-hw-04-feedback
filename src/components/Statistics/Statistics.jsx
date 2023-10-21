import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.container}>
      <p className={`${styles.label} ${styles.good}`}>Good: {good}</p>
      <p className={`${styles.label} ${styles.bad}`}>Bad: {bad}</p>
      <p className={`${styles.label} ${styles.neutral}`}>Neutral: {neutral}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;