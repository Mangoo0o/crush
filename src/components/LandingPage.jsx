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
    <div className='envelope-wrapper-container'>
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.5, duration: 0.8 }}
          className="spotify-btn"
        >
          <div className="spotify-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.508 17.304c-.216.336-.648.444-.984.228-2.736-1.68-6.18-2.064-10.236-1.128-.384.084-.768-.156-.852-.54-.084-.384.156-.768.54-.852 4.452-1.02 8.244-.588 11.304 1.308.336.216.444.648.228.984zm1.476-3.264c-.276.444-.852.588-1.296.312-3.132-1.92-7.908-2.484-11.604-1.356-.504.156-1.032-.132-1.188-.636-.156-.504.132-1.032.636-1.188 4.224-1.284 9.504-.66 13.14 1.572.444.276.588.852.312 1.296zm.132-3.396C15.204 8.256 8.76 8.04 5.004 9.18c-.588.18-1.224-.156-1.404-.744-.18-.588.156-1.224.744-1.404 4.308-1.308 11.412-1.056 15.936 1.632.528.312.708.996.396 1.524-.312.528-.996.708-1.524.396z"/>
            </svg>
          </div>
          <span>play me!</span>
        </motion.a>
      )}
    </div>
  );
};

export default LandingPage;
