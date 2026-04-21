import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt play when 'play' prop becomes true
    if (play && audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Autoplay blocked, waiting for interaction.");
      });
    }
  }, [play]);

  useEffect(() => {
    // Fallback: Play on first click anywhere if browser blocked initial play
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(() => {});
      }
      window.removeEventListener('click', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, []);

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
