import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music } from 'lucide-react';

const MainContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full w-full p-8 pb-12 overflow-y-auto pt-24"
    >
      <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 mt-8">
        <Sparkles size={20} className="text-[#ffb6c1] drop-shadow-sm" />
        <span className="title-text text-sm uppercase tracking-widest text-[#555] opacity-80">A Message For You</span>
      </motion.div>

      <motion.h2 variants={itemVariants} className="title-text text-5xl mb-12 leading-tight text-white drop-shadow-lg">
        You make everything feel <span className="text-[#ffc0cb] italic">light.</span>
      </motion.h2>

      <motion.div variants={itemVariants} className="glass-panel p-8 mb-auto shadow-xl">
        <p className="body-text text-xl leading-relaxed text-gray-800 italic font-medium">
          "I just wanted to say that you're the first thing on my mind when I wake up and the last thing before I sleep. This song reminds me of everything we are."
        </p>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex items-center gap-4 glass-panel p-4 w-full mt-10 backdrop-blur-xl border-white/50 shadow-lg"
      >
        <div className="bg-[#ffc0cb] p-2.5 rounded-full animate-pulse shadow-sm">
          <Music size={18} color="white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="title-text text-[9px] uppercase tracking-wider text-gray-500">Currently Playing</span>
          <span className="body-text text-sm font-bold text-gray-800 truncate">About You — The 1975</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MainContent;
