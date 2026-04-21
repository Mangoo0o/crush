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

  const message = "I hope you are having a good day today! Sorry if im asking too much AHHAHAHA talks a lot yan sha, i just really enjoy talking to you po but yeah, heave a great dayy!!";

  return (
    <div className='envelope-wrapper-container flex flex-col items-center justify-center h-full relative'>
      <div
        className={`envelope-wrapper ${isOpen ? 'flap' : ''}`}
        onClick={handleClick}
      >
        <div className='envelope'>
          <div className='letter'>
            <div className='text'>
              <strong>
                <TypewriterText text="Dear Hya Crushicakes," delay={1.5} isOpen={isOpen} />
              </strong>
              <p>
                <TypewriterText text={message} delay={2.5} isOpen={isOpen} />
              </p>
              <p className='sincerely'>
                <TypewriterText text="Sincerely, Waks" delay={6.5} isOpen={isOpen} />
              </p>
            </div>
          </div>
        </div>
        <div className='heart'></div>
      </div>

      {isOpen && (
        <motion.a
          href="https://open.spotify.com/playlist/7eyN0z7UqxhCTItUBhmAqS?si=UuxeG41TTT2CQ7eTqZtxFw"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5, duration: 0.8 }}
          className="cute-button"
        >
          <span className="heart-icon">❤️</span>
          <span>play me!</span>
        </motion.a>
      )}
    </div>
  );
};

export default LandingPage;
