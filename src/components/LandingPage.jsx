import React, { useState } from 'react';

const LandingPage = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      onEnter(); // Trigger music
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className='envelope-wrapper-container'>
      <div 
        className={`envelope-wrapper ${isOpen ? 'flap' : ''}`} 
        onClick={handleClick}
      >
        <div className='envelope'>
          <div className='letter'>
            <div className='text'>
              <strong>Dear Programmers,</strong>
              <p>
                I hope you are having a good day today! Just know that I commend all of you, and your work as programmers is greatly appreciated!
              </p>
              <p className='sincerely'>
                Sincerely, Dwyane {"<3"}
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
