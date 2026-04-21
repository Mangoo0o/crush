import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className="iphone-container">
      {/* Background audio - try to play on load */}
      <AudioPlayer play={true} />
      
      {/* Unified view: The envelope persists */}
      <LandingPage onEnter={handleEnter} />
    </div>
  );
}

export default App;
