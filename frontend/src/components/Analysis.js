import React, { useState } from 'react';

const Analysis = () => {
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const toggleAdvancedOptions = () => {
    setShowAdvancedOptions(!showAdvancedOptions);
  };

  const toggleFeedbackForm = () => {
    setShowFeedbackForm(!showFeedbackForm);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback('');
    setShowFeedbackForm(false);
  };

  return (
    <div className="analysis-container">
      <h1>Data Analysis</h1>
      
      <button onClick={toggleAdvancedOptions}>
        {showAdvancedOptions ? 'Hide Advanced Options' : 'Show Advanced Options'}
      </button>

      {showAdvancedOptions && (
        <div className="advanced-options">
          <h2>Advanced Analysis Options</h2>
          <p>Here you can configure advanced settings for your data analysis.</p>
        </div>
      )}

      <button onClick={toggleFeedbackForm}>
        {showFeedbackForm ? 'Hide Feedback Form' : 'Provide Feedback'}
      </button>

      {showFeedbackForm && (
        <form onSubmit={handleFeedbackSubmit} className="feedback-form">
          <h2>Feedback Form</h2>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback here..."
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default Analysis;
