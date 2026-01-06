import { motion } from "framer-motion";

const experiences = [
  {
    role: "MERN Stack Web Developer (Freelance)",
    company: "Self / Remote",
    duration: "2025 – Present",
    details: [
      "Developed responsive web applications using React and Tailwind CSS",
      "Built RESTful APIs with Node.js and Express",
      "Integrated MongoDB for data storage",
      "Implemented authentication and protected routes",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Experience
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            My professional and hands-on development experience.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-blue-600 pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full"></span>

              <h3 className="text-xl font-semibold text-gray-800">
                {exp.role}
              </h3>
              <p className="text-gray-500 mb-2">
                {exp.company} | {exp.duration}
              </p>

              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
