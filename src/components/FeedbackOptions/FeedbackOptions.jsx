import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button className={`${styles.button} ${styles.good}`} onClick={() => options.good('good')}>Good</button>
      <button className={`${styles.button} ${styles.neutral}`} onClick={() => options.neutral('neutral')}>Neutral</button>
      <button className={`${styles.button} ${styles.bad}`} onClick={() => options.bad('bad')}>Bad</button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
  }).isRequired,
};

export default FeedbackOptions;