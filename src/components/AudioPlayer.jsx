import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      // Browsers allow .play() after a user interaction (which happened on LandingPage)
      audioRef.current.play().catch(error => {
        console.error("Local audio playback failed:", error);
      });
    }
  }, [play]);

  return (
    <audio
      ref={audioRef}
      src="/music.mp3"
      loop
      autoPlay
      style={{ display: 'none' }}
    />
  );
};

export default AudioPlayer;
