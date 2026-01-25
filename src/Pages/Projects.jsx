
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Hero.io - App Building Platform',
      description: 'Innovative app platform designed to make everyday life simpler, smarter, and more exciting. Build productive apps with modern tools and technologies.',
      image: '/hero.png',
      badge: 'Web App',
      badgeColor: 'bg-purple-600',
      tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Web App',
      liveLink: 'https://hero-apps-react-a8.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'HomeHero – Local Household Service Finder',
      description: 'HomeHero is a modern web application that connects users with trusted local service providers such as electricians, plumbers, and cleaners. Users can browse services, book appointments, and manage their bookings easily.',
      image: '/heroimg.png',
      badge: 'Web App',
      badgeColor: 'bg-blue-500',
      tech: ['React.js', 'Tailwind CSS', 'Firebase'],
      category: 'Web App',
      liveLink: 'https://homehero-a10.netlify.app/',
      githubLink: '#'
    },
    {
      title: ' BookCourier – Library-to-Home Delivery System',
      description: 'BookCourier is a modern library-to-home delivery management system where users can browse books from nearby libraries, place delivery requests, track orders, and manage payments without physically visiting the library.',
      image: '/bookimg.png',
      badge: 'Full Stack',
      badgeColor: 'bg-orange-500',
      tech: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
      category: 'Full Stack',
      liveLink: 'https://book-librariary-a-11.netlify.app/',
      githubLink: '#'
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 50 
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: 'easeOut' 
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      transition: { 
        duration: 0.3 
      }
    }
  };

  return (
    <section className="space-y-12" id="projects">
      <motion.div
        className="text-center max-w-2xl mt-12 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
        <p className="mt-4 text-gray-600 dark:text-gray-400">A showcase of my recent work and side projects.</p>
      </motion.div>

      <motion.div
        className="flex justify-center flex-wrap gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {['All', 'Full Stack', 'Web App'].map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 font-medium rounded-full text-sm transition-all ${
              filter === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        layout
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              layout
              className="bg-white dark:bg-slate-800/50 rounded-lg shadow-lg overflow-hidden h-full flex flex-col group cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
            <div className="relative overflow-hidden">
              <motion.img
                alt={project.title}
                className="w-full h-56 object-cover object-top"
                src={project.image}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <motion.span
                className={`absolute top-3 right-3 ${project.badgeColor} text-white px-3 py-1 text-xs font-semibold rounded-full`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {project.badge}
              </motion.span>
              
              {/* Hover overlay with links */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              >
                <motion.a
                  href={project.liveLink}
                  className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  Live
                </motion.a>
                <motion.a
                  href={project.githubLink}
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  Code
                </motion.a>
              </motion.div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <motion.h3
                className="text-xl font-bold text-gray-900 dark:text-white"
                whileHover={{ x: 5, color: '#2563EB' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">{project.description}</p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">TECH STACK</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-gray-200 dark:bg-slate-700 text-xs font-medium rounded-full text-gray-700 dark:text-gray-300"
                      whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: '#ffffff' }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;

// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import projects from "../data/Project";


// const Projects = () => {
//   return (
//     <section id="projects" className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Section Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <h2 className="text-4xl font-bold text-gray-800 mb-3">
//             Projects
//           </h2>
//           <p className="text-gray-500 max-w-xl mx-auto">
//             A selection of projects that showcase my skills and experience.
//           </p>
//         </motion.div>

//         {/* Project Cards */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
//             >
//               <img
//                 src={project.image}
//                 alt={project.name}
//                 className="h-48 w-full object-cover"
//               />

//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">
//                   {project.name}
//                 </h3>

//                 <p className="text-gray-600 mb-4">
//                   {project.shortDesc}
//                 </p>

//                 <Link
//                   to={`/projects/${project.id}`}
//                   className="inline-block text-blue-600 font-medium hover:underline"
//                 >
//                   View Details →
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
