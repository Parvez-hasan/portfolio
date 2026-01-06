import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            About Me
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what I enjoy doing.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              My Programming Journey
            </h3>

            <p className="text-gray-600 leading-relaxed mb-4">
              My journey into web development started with curiosity about how
              websites work behind the scenes. What began as a learning
              experiment gradually turned into a strong passion for building
              real-world applications.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              I enjoy creating clean user interfaces, writing efficient code,
              and solving logical problems. I mainly work with modern
              technologies like React, Tailwind CSS, Node.js, Express, and
              MongoDB.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Outside of programming, I enjoy sports, exploring new
              technologies, and constantly improving myself both technically
              and personally.
            </p>
          </motion.div>

          {/* Right Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="p-6 bg-gray-50 rounded-xl text-center shadow-sm">
              <h4 className="text-3xl font-bold text-blue-600 mb-1">1+</h4>
              <p className="text-gray-600">Years Learning</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl text-center shadow-sm">
              <h4 className="text-3xl font-bold text-blue-600 mb-1">10+</h4>
              <p className="text-gray-600">Projects Built</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl text-center shadow-sm">
              <h4 className="text-3xl font-bold text-blue-600 mb-1">MERN</h4>
              <p className="text-gray-600">Stack Focus</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl text-center shadow-sm">
              <h4 className="text-3xl font-bold text-blue-600 mb-1">24/7</h4>
              <p className="text-gray-600">Learning Mindset</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
