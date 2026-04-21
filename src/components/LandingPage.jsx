import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const LandingPage = ({ onEnter }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center glass-panel"
      style={{ margin: '20px' }}
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mb-8"
      >
        <Heart size={80} color="#ffc0cb" fill="#ffc0cb" />
      </motion.div>
      
      <h1 className="title-text text-3xl text-center mb-4 text-[#ff8da1]">A surprise for you</h1>
      <p className="body-text text-gray-600 mb-10 text-center px-8">Somebody has a message for you. Open it when you're ready.</p>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onEnter}
        className="px-10 py-4 bg-[#ffc0cb] text-white rounded-full title-text text-xl shadow-lg shadow-pink-200/50 transition-all"
      >
        Open letter
      </motion.button>
    </motion.div>
  );
};

export default LandingPage;
