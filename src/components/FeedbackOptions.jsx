import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      <button onClick={() => options.good('good')}>Good</button>
      <button onClick={() => options.neutral('neutral')}>Neutral</button>
      <button onClick={() => options.bad('bad')}>Bad</button>
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