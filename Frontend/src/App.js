import React from 'react';
import './App.css';
import PromptForm from './components/PromptForm';
import GeneratedStory from './components/GeneratedStory';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <h1>Story Generator</h1>
      <PromptForm />
      <GeneratedStory />
      <Leaderboard />
    </div>
  );
}

export default App;
