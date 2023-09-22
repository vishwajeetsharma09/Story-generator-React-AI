import React, { useState, useEffect } from 'react';

function GeneratedStory() {
  const [story, setStory] = useState('');

  useEffect(() => {
    // Define a function to fetch the generated story
    const fetchGeneratedStory = async () => {
      try {
        // Send a GET request to the backend API to retrieve the generated story
        const response = await fetch('/api/get-generated-story');

        if (!response.ok) {
          throw new Error('Failed to fetch generated story');
        }

        // Parse the response as JSON
        const data = await response.json();

        // Update the 'story' state with the generated story
        setStory(data.story);
      } catch (error) {
        console.error('Error fetching generated story:', error);
      }
    };

    // Call the fetchGeneratedStory function when the component mounts
    fetchGeneratedStory();
  }, []);

  return (
    <div className="GeneratedStory">
      <h2>Generated Story</h2>
      <p>{story}</p>
    </div>
  );
}

export default GeneratedStory;
