import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onEnter();
    }, 2800); 
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 z-50 grid place-items-center bg-transparent w-full h-full"
    >
      <div 
        className={`envelope-wrapper ${isOpen ? 'flap' : ''}`} 
        onClick={handleClick}
      >
        <div className="envelope">
          <div className="letter">
            <div className="text px-2 py-4">
              <strong className="text-pink-600">My Crush,</strong>
              <p className="mt-1 text-[10px] leading-tight">
                Wait, before you see the message, let the music set the mood...
              </p>
            </div>
          </div>
        </div>
        <div className="heart">
          <Heart fill="currentColor" size={40} strokeWidth={1} />
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
