import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#E5F6FD] z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      onAnimationComplete={onAnimationComplete}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
        transition={{ // Increased duration for a slower pop-in
          type: "spring", // Use a spring transition for a smoother feel
          stiffness: 150, // Reduced stiffness for slower animation
          damping: 20, // Adjust damping for less oscillation
          delay: 0.2, // Reduce the delay slightly
        }}
      >
        <Image src="/logo2-.png" alt="Logo" width={200} height={200} />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;