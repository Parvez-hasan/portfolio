import { motion } from "framer-motion";

const skillsData = {
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 95 },
    { name: "Tailwind CSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 70 },
  ],
  tools: [
    { name: "Git", level: 85 },
    { name: "GitHub", level: 85 },
    { name: "Firebase", level: 70 },
    { name: "Vercel", level: 75 },
  ],
};

const SkillBar = ({ skill, level }) => (
  <div className="mb-5">
    <div className="flex justify-between mb-1">
      <span className="text-gray-700 font-medium">{skill}</span>
      <span className="text-gray-500">{level}%</span>
    </div>

    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="h-full bg-blue-600 rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Skills
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-600">
              Frontend
            </h3>
            {skillsData.frontend.map((skill, i) => (
              <SkillBar key={i} skill={skill.name} level={skill.level} />
            ))}
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-600">
              Backend
            </h3>
            {skillsData.backend.map((skill, i) => (
              <SkillBar key={i} skill={skill.name} level={skill.level} />
            ))}
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-600">
              Tools
            </h3>
            {skillsData.tools.map((skill, i) => (
              <SkillBar key={i} skill={skill.name} level={skill.level} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
