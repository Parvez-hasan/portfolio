

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { FaArrowCircleRight } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

const Hero = () => {
  const handleDownloadResume = () => {
    // Google Drive direct download link
    const googleDriveLink = 'https://drive.google.com/file/d/1fufNDAfIw-5QDQK0HXYAdx_8sLwkqaUS/view?usp=sharing';
    
    // Open the link in a new tab to download
    window.open(googleDriveLink, '_blank');
  };
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const badge1Ref = useRef(null);
  const badge2Ref = useRef(null);
  const badge3Ref = useRef(null);

  const roles = ['MERN Stack Developer', 'Frontend Developer', 'Full Stack Developer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    // GSAP floating animation for profile image
    gsap.to(imageRef.current, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // GSAP pulsing animation for availability badge
    gsap.to(badgeRef.current, {
      scale: 1.05,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    // GSAP floating badges around image
    gsap.to(badge1Ref.current, {
      y: -10,
      x: 5,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(badge2Ref.current, {
      y: 10,
      x: -5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(badge3Ref.current, {
      y: -8,
      x: -3,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'backOut' }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative grid lg:grid-cols-2 gap-16 items-center overflow-hidden px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20" id="hero">
      {/* Animated Background Gradient Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1.2, 1, 1.2]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="relative z-10 space-y-8 order-2 lg:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          ref={badgeRef}
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 rounded-full border border-green-200 dark:border-green-800 shadow-lg"
        >
          <motion.span
            className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-sm font-semibold text-green-800 dark:text-green-300">Available for work</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-base font-medium text-primary mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            👋 Hello, I'm
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Parvez Hasan
          </motion.h1>
          <motion.div
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block min-w-[280px] sm:min-w-[350px]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-1 h-8 sm:h-10 bg-gradient-to-b from-blue-600 to-purple-600 ml-2 align-middle"
              />
            </span>
          </motion.div>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
        >
          Passionate about building <span className="text-primary font-semibold">modern</span>, <span className="text-primary font-semibold">responsive</span>, and <span className="text-primary font-semibold">user-friendly</span> web applications with the MERN stack. I using React, Node.js, Express, and MongoDB.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-6"
        >
          <motion.a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work 
            <motion.span 
              className="material-symbols-outlined"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaArrowCircleRight />
            </motion.span>
          </motion.a>
          <motion.button
            onClick={handleDownloadResume}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-200 dark:bg-slate-800 text-gray-800 dark:text-gray-200 font-semibold rounded-xl border-2 border-gray-300 dark:border-slate-700 hover:border-primary dark:hover:border-primary shadow-lg transition-all cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          > Download
            <motion.span 
              className="material-symbols-outlined"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
             <IoMdDownload />
            </motion.span>
           
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 flex justify-center items-center min-h-[500px] order-1 lg:order-2"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        {/* Animated Rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-500/30 dark:border-blue-400/20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-purple-500/30 dark:border-purple-400/20"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        
        {/* Gradient Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        
        {/* Profile Image */}
        <motion.div className="relative">
          <motion.img
            ref={imageRef}
            alt="Portrait of Parvez Hasan"
            className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
            src="https://i.ibb.co.com/1fxfFXYJ/417029541-2540453809460511-619514336146760614-n-removebg-preview.png"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
          />
          {/* Decorative Corner Elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-50 blur-xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-50 blur-xl"
            animate={{ scale: [1.3, 1, 1.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>

        {/* React - Top Right */}
        <motion.div
          ref={badge1Ref}
          className="absolute top-8 right-8 z-10 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            alt="React"
            className="w-5 h-5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          />
        </motion.div>

        {/* MongoDB - Bottom Left */}
        <motion.div
          ref={badge2Ref}
          className="absolute bottom-16 left-8 z-10 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            alt="MongoDB"
            className="w-5 h-5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          />
        </motion.div>

        {/* Node.js - Top Left */}
        <motion.div
          ref={badge3Ref}
          className="absolute top-8 left-8 z-10 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            alt="Node.js"
            className="w-5 h-5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          />
        </motion.div>

        {/* Express.js - Middle Left */}
        <motion.div
          className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <div className="w-5 h-5 flex items-center justify-center bg-gray-800 dark:bg-white rounded">
            <img
              alt="Express.js"
              className="w-4 h-4 dark:invert"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
          </div>
        </motion.div>

        {/* Tailwind CSS - Bottom Right */}
        <motion.div
          className="absolute bottom-16 right-8 z-10 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            alt="Tailwind CSS"
            className="w-5 h-5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
          />
        </motion.div>

        {/* JavaScript - Middle Right */}
        <motion.div
          className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white dark:bg-slate-800 p-2 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <img
            alt="JavaScript"
            className="w-5 h-5"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;