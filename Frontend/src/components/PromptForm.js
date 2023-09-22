import React, { useState } from 'react';

function PromptForm() {
  const [prompt, setPrompt] = useState('');
  const [generatedStory, setGeneratedStory] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      // Send the prompt to the backend API for story generation
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }), // Send the prompt as JSON data
      });

      if (!response.ok) {
        throw new Error('Failed to generate story');
      }

      // Parse the response as JSON
      const data = await response.json();

      // Update the GeneratedStory component with the generated story
      setGeneratedStory(data.story);
    } catch (error) {
      console.error('Error generating story:', error);
    }
  };

  return (
    <div className="PromptForm">
      <h2>Enter Your Story Prompt</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="In a city where everyone can fly..."
          value={prompt}
          onChange={handlePromptChange}
        />
        <button type="submit">Generate Story</button>
      </form>
      
      
      {/* Display the generated story */}
      {generatedStory && (
        <div className="GeneratedStory">
          <h3>Generated Story</h3>
          <p>{generatedStory}</p>
        </div>
      )}
    </div>
  );
}

export default PromptForm;
