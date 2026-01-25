import { motion } from 'framer-motion';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { MdArrowUpward } from 'react-icons/md';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
      ),
      url: 'https://github.com/Parvez-hasan',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM4.5 12H3V5.5h1.5V12zM3.75 4.75a1 1 0 110-2 1 1 0 010 2zM12.5 12H11v-3.25c0-.79-.01-1.8-1.1-1.8-1.1 0-1.27.86-1.27 1.74V12H7V5.5h1.44v.66h.02c.2-.38.69-.78 1.42-.78 1.52 0 1.8 1 1.8 2.3V12z"/>
        </svg>
      ),
      url: 'https://www.linkedin.com/in/parvez-hasan-bd/',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Email',
      icon: <span className="material-symbols-outlined text-xl"><IoMdMail /></span>,
      url: 'mailto:parvezweb.33@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 3.539a6.839 6.839 0 01-1.95.535A3.425 3.425 0 0015.59.81a6.853 6.853 0 01-2.156.824A3.422 3.422 0 0010.92 0c-1.884 0-3.411 1.526-3.411 3.411 0 .267.03.526.088.776A9.688 9.688 0 011.085.578a3.4 3.4 0 00-.462 1.714 3.41 3.41 0 001.516 2.84A3.404 3.404 0 01.196 4.7v.043c0 1.66 1.18 3.045 2.747 3.36a3.42 3.42 0 01-.898.12 3.424 3.424 0 003.195 2.375A6.866 6.866 0 010 11.956a9.646 9.646 0 005.215 1.528C11.543 13.484 14.1 8.52 14.1 4.225c0-.14-.003-.28-.008-.42a6.02 6.02 0 001.474-1.526l.001-.001.433-.438z"/>
        </svg>
      ),
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-slate-900/50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Parvez Hasan</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Junior MERN Stack Developer passionate about creating beautiful, functional web applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-slate-800 text-gray-600 dark:text-gray-400 transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base"><IoMdMail /></span>
                <a href="mailto:parvezweb.33@gmail.com" className="hover:text-primary transition-colors">
                  parvezweb.33@gmail.com
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base"><IoCall /></span>
                <a href="tel:+8801948017882" className="hover:text-primary transition-colors">
                  +880 1948017882
                </a>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base"><FaLocationDot /></span>
                <span> 2320 Hossinpur, Kishoreganj, Bangladesh</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-200 dark:border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="mb-4 text-center sm:mb-0">
            © 2026 <span className="text-primary font-semibold">Parvez Hasan</span>. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="material-symbols-outlined text-base"><MdArrowUpward /></span> Back to top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;