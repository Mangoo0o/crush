import React from 'react';

const AudioPlayer = ({ play }) => {
  if (!play) return null;

  return (
    <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      <iframe
        width="0"
        height="0"
        src={`https://www.youtube.com/embed/vWqP39R7w08?autoplay=1&mute=0&loop=1&playlist=vWqP39R7w08`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default AudioPlayer;
