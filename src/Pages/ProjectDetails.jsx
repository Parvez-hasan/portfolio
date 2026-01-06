
import { motion } from "framer-motion";
import { useParams } from "react-router";
import projects from "../data/Project";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <p className="text-center py-20">Project not found</p>;
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">

        <motion.img
          src={project.image}
          alt={project.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full rounded-xl mb-8"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          {project.name}
        </motion.h1>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex gap-4 mb-10">
          <a
            href={project.live}
            target="_blank"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg"
          >
            GitHub (Client)
          </a>
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-3">
            Challenges Faced
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>

        {/* Future Plans */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            Future Improvements
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {project.future.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;
