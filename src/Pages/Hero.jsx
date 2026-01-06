import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import profileImg from "../assets/WhatsApp Image 2026-01-05 at 2.42.21 PM.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className=" p-4 md:p-8 lg:p-12 flex items-center bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl text-blue-600 font-semibold mb-2">
            Hi, I’m Parvez Hasan
          </h2>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            MERN Stack Web Developer
          </h1>

          <p className="text-gray-600 mb-6 leading-relaxed">
            I build modern, responsive, and scalable web applications
            using React, Node.js, Express, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-6">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-2xl text-gray-600">
            <a href="https://github.com/Parvez-hasan" target="_blank">
              <FaGithub className="hover:text-black transition" />
            </a>
            <a href="https://www.linkedin.com/in/parvez-hasan-bd/" target="_blank">
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
            <a href="https://web.facebook.com/parvez.ahmed.577031" target="_blank">
              <FaFacebook className="hover:text-blue-600 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Parvez Hasan"
            className="w-72 h-72 rounded-full object-cover shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
