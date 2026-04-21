import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import MainContent from './components/MainContent';
import AudioPlayer from './components/AudioPlayer';

function App() {
  const [hasEntered, setHasEntered] = useState(false);

  const handleEnter = () => {
    setHasEntered(true);
  };

  return (
    <div className="iphone-container">
      {/* Background audio - only plays after user interaction */}
      <AudioPlayer play={hasEntered} />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <LandingPage key="landing" onEnter={handleEnter} />
        ) : (
          <MainContent key="content" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
