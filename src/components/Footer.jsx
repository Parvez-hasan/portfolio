import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Name */}
          <h2 className="text-2xl font-bold text-white">
            Parvez<span className="text-blue-500">.</span>
          </h2>

          {/* Social */}
          <div className="flex gap-6 text-xl">
            <a
              href="https://github.com/Parvez-hasan"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parvez-hasan-bd/"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://web.facebook.com/parvez.ahmed.577031"
              target="_blank"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Parvez Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
