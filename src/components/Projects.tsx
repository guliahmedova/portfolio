"use client";
import { frontendProjects, Project } from "@/assets/constants/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems(visibleItems + 3);
  };

  const resetProjects = () => {
    setVisibleItems(6);
  };

  const renderProjects = (projects: Project[]) => {
    return projects?.slice(0, visibleItems).map((project: Project) => (
      <motion.div
        key={project.id}
        whileHover={{ scale: 1.05 }}
        className="p-4 border border-gray-500 rounded-lg shadow-2xl hover:shadow-2xl transition duration-300"
      >
        <Image
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <h3 className="text-xl font-semibold mt-4 text-white">
          {project.title}
        </h3>
        <p className="text-gray-500">{project.description}</p>
        <a
          href={project.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 mt-4 inline-block"
        >
          Visit Project
        </a>
      </motion.div>
    ));
  };

  return (
    <div className="container mx-auto py-8" id="projects">
      <h1 className="text-2xl md:text-4xl text-center tracking-wide select-none font-medium mb-10">
        Featured Projects
      </h1>

      <div className="px-4 lg:px-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderProjects(frontendProjects)}
        </div>
      </div>

      {visibleItems < frontendProjects.length && (
        <div className="mt-8 text-center">
          <button
            className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
            onClick={loadMore}
          >
            Show More
          </button>
        </div>
      )}

      {visibleItems >= frontendProjects.length && (
        <div className="mt-8 text-center">
          <button
            className="py-2 px-4 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-300"
            onClick={resetProjects}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
};
export default Projects;
