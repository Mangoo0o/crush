import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Music } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
      onEnter(); // Trigger music
    }
  };

  return (
    <div className="absolute inset-0 z-50 grid place-items-center bg-transparent w-full h-full overflow-hidden">
      <div 
        className={`envelope-wrapper transition-all duration-1000 ${isOpen ? 'flap scale-90 translate-y-20' : ''}`} 
        onClick={handleClick}
      >
        <div className="envelope">
          <div className={`letter transition-all duration-1000 ${isOpen ? 'h-[500px] -translate-y-[250px] overflow-y-auto custom-scrollbar' : 'h-full'}`}>
            <div className="text px-6 py-8">
              {!isOpen ? (
                <div className="animate-pulse">
                  <strong className="text-pink-600 text-lg">My Crush,</strong>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    I have something special to tell you... Click the heart to open.
                  </p>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles size={18} className="text-pink-400" />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">A Message For You</span>
                  </div>

                  <h2 className="text-3xl font-bold leading-tight text-gray-800">
                    You make everything feel <span className="text-pink-500 italic">light.</span>
                  </h2>

                  <div className="bg-pink-50/50 p-6 rounded-2xl border border-pink-100 shadow-sm">
                    <p className="text-lg leading-relaxed text-gray-700 italic font-medium">
                      "I just wanted to say that you're the first thing on my mind when I wake up and the last thing before I sleep. This song reminds me of everything we are."
                    </p>
                  </div>

                  <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl border border-white/50 shadow-sm mt-4">
                    <div className="bg-pink-400 p-2 rounded-full animate-pulse">
                      <Music size={16} color="white" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold">Currently Playing</span>
                      <span className="text-xs font-bold text-gray-700 truncate">About You — The 1975</span>
                    </div>
                  </div>
                  
                  {/* Space at the bottom for scrolling comfort */}
                  <div className="h-10" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
        <div className="heart">
          <Heart fill="currentColor" size={40} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
