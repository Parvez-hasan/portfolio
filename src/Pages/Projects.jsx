import { motion } from "framer-motion";
import { Link } from "react-router";
import projects from "../data/Project";


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Projects
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A selection of projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.name}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.name}
                </h3>

                <p className="text-gray-600 mb-4">
                  {project.shortDesc}
                </p>

                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
