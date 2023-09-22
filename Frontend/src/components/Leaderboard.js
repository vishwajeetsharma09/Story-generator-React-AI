import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch the top-voted stories from the backend API
    // Update the 'stories' state with the response
  }, []);

  return (
    <div className="Leaderboard">
      <h2>Top-Voted Stories</h2>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <p>{story.text}</p>
            <button>Upvote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
