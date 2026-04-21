import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ text, delay = 0, isOpen }) => {
  if (!isOpen) return null;
  
  const characters = Array.from(text);
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay }
    }
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.span variants={container} initial="hidden" animate="visible">
      {characters.map((char, index) => (
        <motion.span variants={child} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const LandingPage = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      onEnter(); // Trigger music
    }
  };

  const message = "I hope you are having a good day today! Just know that I commend all of you, and your work as programmers is greatly appreciated!";

  return (
    <div className='envelope-wrapper-container'>
      <div 
        className={`envelope-wrapper ${isOpen ? 'flap' : ''}`} 
        onClick={handleClick}
      >
        <div className='envelope'>
          <div className='letter'>
            <div className='text'>
              <strong>
                <TypewriterText text="Dear Programmers," delay={1.5} isOpen={isOpen} />
              </strong>
              <p>
                <TypewriterText text={message} delay={2.5} isOpen={isOpen} />
              </p>
              <p className='sincerely'>
                <TypewriterText text="Sincerely, Dwyane <3" delay={6.5} isOpen={isOpen} />
              </p>
            </div>
          </div>
        </div>
        <div className='heart'></div>
      </div>
    </div>
  );
};

export default LandingPage;
