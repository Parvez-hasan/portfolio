import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { IoMdMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  const icon1Ref = useRef(null);
  const icon2Ref = useRef(null);
  const icon3Ref = useRef(null);

  useEffect(() => {
    // GSAP floating animations for icons
    gsap.to(icon1Ref.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    gsap.to(icon2Ref.current, {
      y: -10,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.3
    });

    gsap.to(icon3Ref.current, {
      y: -10,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.6
    });
  }, []);

  const contactInfo = [
    {
      icon: <IoMdMail />,
      title: 'Email',
      info: 'parvez',
      link: 'mailto:parvezweb@gmail.com',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      iconRef: icon1Ref
    },
    {
      icon: <IoCall />,
      title: 'Phone',
      info: '+880 1948177882',
      link: 'tel:+8801948177882',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconRef: icon2Ref
    },
    {
      icon: <FaLocationDot />,
      title: 'Location',
      info: 'Kishoreganj, Bangladesh',
      link: 'https://maps.google.com/?q=Kishoreganj,Bangladesh',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconRef: icon3Ref
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="space-y-12" id="contact">
      <motion.div
        className="text-center max-w-2xl mt-8 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Have a project in mind? Let's work together.</p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {contactInfo.map((contact, index) => (
          <motion.a
            key={index}
            href={contact.link}
            target={contact.title === 'Location' ? '_blank' : undefined}
            rel={contact.title === 'Location' ? 'noopener noreferrer' : undefined}
            className="bg-white dark:bg-slate-800/50 p-6 rounded-lg shadow-lg block group cursor-pointer"
            variants={cardVariants}
            whileHover={{
              y: -15,
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
              transition: { type: 'spring', stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${contact.bgColor} mb-4`}
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.2, 1.2, 1.2, 1],
                transition: { duration: 0.5 }
              }}
            >
              <span
                ref={contact.iconRef}
                className={`material-symbols-outlined text-4xl ${contact.color}`}
              >
                {contact.icon}
              </span>
            </motion.div>

            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white"
              whileHover={{
                scale: 1.1,
                color: '#2563EB',
                transition: { duration: 0.3 }
              }}
            >
              {contact.title}
            </motion.h3>

            <motion.p
              className="mt-2 text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
            >
              {contact.info}
            </motion.p>

            {/* Animated underline on hover */}
            <motion.div
              className="h-1 bg-primary rounded-full mt-4 mx-auto"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{
                opacity: [0, 0.1, 0],
                scale: [0.8, 1.2],
                transition: { duration: 0.6 }
              }}
              style={{
                background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)'
              }}
            />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;