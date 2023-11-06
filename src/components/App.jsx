import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ good: () => handleFeedback('good'), neutral: () => handleFeedback('neutral'), bad: () => handleFeedback('bad') }} />
      </Section>
      {totalFeedback > 0 ? (
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
