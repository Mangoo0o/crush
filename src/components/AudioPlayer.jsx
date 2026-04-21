import React, { useEffect, useRef } from 'react';
import YouTube from 'react-youtube';

const AudioPlayer = ({ play }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (play && playerRef.current) {
      playerRef.current.playVideo();
    }
  }, [play]);

  const onReady = (event) => {
    playerRef.current = event.target;
    // Attempt playback immediately if the play signal is already true
    if (play) {
      event.target.playVideo();
    }
  };

  const opts = {
    height: '1',
    width: '1',
    playerVars: {
      autoplay: play ? 1 : 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      iv_load_policy: 3,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div style={{ 
      position: 'absolute', 
      top: '-1000px', 
      left: '-1000px', 
      visibility: 'hidden', 
      pointerEvents: 'none' 
    }}>
      <YouTube 
        videoId="vWqP39R7w08" 
        opts={opts} 
        onReady={onReady} 
      />
    </div>
  );
};

export default AudioPlayer;
