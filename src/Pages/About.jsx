import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdOutlineFavoriteBorder, MdRocketLaunch, MdWavingHand } from 'react-icons/md';
import { IoCall, IoSchoolSharp } from 'react-icons/io5';
import { IoMdMail } from 'react-icons/io';
import { FaCode, FaRegFolder } from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-stat', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        scale: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        rotateY: 15,
        rotateX: 5,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      ),
      url: 'https://github.com/Parvez-hasan',
      bgColor: 'bg-gray-800 hover:bg-gray-700',
      label: 'GitHub Profile'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM4.5 12H3V5.5h1.5V12zM3.75 4.75a1 1 0 110-2 1 1 0 010 2zM12.5 12H11v-3.25c0-.79-.01-1.8-1.1-1.8-1.1 0-1.27.86-1.27 1.74V12H7V5.5h1.44v.66h.02c.2-.38.69-.78 1.42-.78 1.52 0 1.8 1 1.8 2.3V12z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/parvez-hasan-bd/',
      bgColor: 'bg-blue-700 hover:bg-blue-600',
      label: 'LinkedIn Profile'
    },
    {
      name: 'Email',
      icon: <span className="material-symbols-outlined text-xl"><IoMdMail /></span>,
      url: 'mailto:parvezweb.33@gmail.com',
      bgColor: 'bg-red-500 hover:bg-red-400',
      label: 'Send Email',
      tooltip: 'parvezweb.33@gmail.com'
    },
    {
      name: 'Phone',
      icon: <span className="material-symbols-outlined text-xl"><IoCall /></span>,
      url: 'tel:+8801948017882',
      bgColor: 'bg-green-500 hover:bg-green-400',
      label: 'Call Me',
      tooltip: '+880 1948017882'
    }
  ];

  const stats = [
    { number: '12+', label: 'Projects', icon: <FaRegFolder /> },
    { number: '15+', label: 'Technologies', icon: <FaCode /> },
    { number: '100%', label: 'Dedication', icon: <MdOutlineFavoriteBorder /> }
  ];

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'MongoDB', level: 83 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden" id="about">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl mt-12 font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Main Content - Unified Layout */}
        <motion.div
          className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ opacity }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Section */}
            <motion.div
              className="flex flex-col items-center text-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Profile Image with 3D Effect */}
              <motion.div
                ref={imageRef}
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-50"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                <img
                  alt="Portrait of Parvez Hasan"
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl"
                  src="https://i.ibb.co.com/1fxfFXYJ/417029541-2540453809460511-619514336146760614-n-removebg-preview.png"
                />
                <motion.span
                  className="absolute bottom-4 right-4 block h-5 w-5 rounded-full bg-green-400 ring-4 ring-white dark:ring-slate-800 shadow-lg"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>

              {/* Name & Title */}
              <motion.div variants={itemVariants} className="space-y-2">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Parvez Hasan
                </h3>
                <motion.p
                  className="text-xl font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  Junior MERN Stack Developer
                </motion.p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => (
                  <div key={social.name} className="relative group">
                    <motion.a
                      className={`w-12 h-12 flex items-center justify-center rounded-full text-white transition-all ${social.bgColor} shadow-lg`}
                      href={social.url}
                      target={social.name !== 'Email' && social.name !== 'Phone' ? '_blank' : undefined}
                      rel={social.name !== 'Email' && social.name !== 'Phone' ? 'noopener noreferrer' : undefined}
                      aria-label={social.label}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        y: -5
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {social.icon}
                    </motion.a>
                    {social.tooltip && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 shadow-xl">
                        {social.tooltip}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 justify-center items-center gap-4 w-full pt-6"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="about-stat bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 p-4 rounded-xl text-center"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <span className="material-symbols-outlined text-primary flex justify-center text-2xl mb-1">
                      {stat.icon}
                    </span>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: About Content */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Introduction */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="material-symbols-outlined text-2xl"><MdWavingHand /></span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Hello There!
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a <span className="text-primary font-semibold">MERN Stack Developer</span> skilled in React.js, Node.js, Express.js, and MongoDB. I'm passionate about building clean, responsive, and user-friendly web interfaces that solve real-world problems.
                </p>
              </motion.div>

              {/* Education */}
              <motion.div variants={fadeInUp} className="space-y-3">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="material-symbols-outlined text-2xl"><IoSchoolSharp /></span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently pursuing my Bachelor's in <span className="text-primary font-semibold">Geography and Environment</span>, combining technical skills with environmental awareness.
                </p>
              </motion.div>

              {/* Skills Progress */}
              <motion.div variants={fadeInUp} className="space-y-4 pt-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary"><FaCode /></span>
                  Core Technologies
                </h4>
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Goals */}
              <motion.div variants={fadeInUp} className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-xl text-white shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="material-symbols-outlined text-2xl"><MdRocketLaunch /></span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    My Goals
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm seeking opportunities to apply my skills, grow with a collaborative team, and contribute to meaningful digital products. I believe in continuous learning and staying updated with the latest technologies.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;