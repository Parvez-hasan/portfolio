import { motion } from 'framer-motion';

const Skills = () => {
  const frontendSkills = [
    { name: 'JavaScript', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', level: 92, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Router', level: 88, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg' },
    { name: 'Tailwind CSS', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'HTML5', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', level: 93, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Responsive Design', level: 94, logo: 'https://cdn-icons-png.flaticon.com/512/2721/2721297.png' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 87, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', dark: true },
    { name: 'JWT', level: 82, logo: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg' },
    { name: 'Firebase', level: 80, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'REST API', level: 88, logo: 'https://cdn-icons-png.flaticon.com/512/2164/2164832.png' },
  ];

  const tools = [
    { name: 'Git', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', dark: true },
    { name: 'VS Code', level: 95, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Chrome', level: 92, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg' },
    { name: 'Netlify', level: 89, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
    { name: 'Vercel', level: 90, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg', dark: true },
  ];

  const database = [
    { name: 'MongoDB', level: 85, logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="space-y-12" id="skills">
      <motion.div
        className="text-center max-w-2xl mt-12 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Technologies</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Technologies and skills I use to build amazing products.</p>
      </motion.div>
      <div className="space-y-12">
        {/* Frontend */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-lg text-center space-y-3"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  alt={`${skill.name} logo`}
                  className="w-12 h-12 mx-auto object-contain"
                  src={skill.logo}
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                />
                <p className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Backend */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-1 bg-green-500 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Backend</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-lg text-center space-y-3"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  alt={`${skill.name} logo`}
                  className={`w-12 h-12 mx-auto object-contain ${skill.dark ? 'dark:invert' : ''}`}
                  src={skill.logo}
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                />
                <p className="font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-1 bg-orange-500 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Tools</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-lg text-center space-y-3"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  alt={`${tool.name} logo`}
                  className={`w-12 h-12 mx-auto object-contain ${tool.dark ? 'dark:invert' : ''}`}
                  src={tool.logo}
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                />
                <p className="font-semibold text-gray-800 dark:text-gray-200">{tool.name}</p>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-orange-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{tool.level}%</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Database */}
        <div>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-1 bg-purple-500 rounded-full"></div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Database</h3>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {database.map((db, index) => (
              <motion.div
                key={db.name}
                className="bg-white dark:bg-slate-800/50 p-4 rounded-lg shadow-lg text-center space-y-3"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.img
                  alt={`${db.name} logo`}
                  className="w-12 h-12 mx-auto object-contain"
                  src={db.logo}
                  animate={{ 
                    y: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                />
                <p className="font-semibold text-gray-800 dark:text-gray-200">{db.name}</p>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${db.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{db.level}%</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;