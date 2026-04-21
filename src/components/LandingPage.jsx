import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LandingPage = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    // Trigger the music and transition after the animation starts
    setTimeout(() => {
      onEnter();
    }, 2500); // 2.5s delay to let the letter come out
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-50 flex items-center justify-center pointer-events-auto"
    >
      <div className={`envelope-wrapper ${isOpen ? 'flap' : ''}`} onClick={handleClick}>
        <div className="envelope">
          <div className="letter">
            <div className="text">
              <strong>My Crush,</strong>
              <p>I have something to tell you...</p>
            </div>
          </div>
        </div>
        <div className="heart"></div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
