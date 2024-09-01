"use client";
import {
  frontendProjects,
  fullstackProjects,
  Project,
} from "@/assets/constants/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const renderProjects = (projects: Project[]) => {
    return projects.map((project: Project) => (
      <motion.div
        key={project.id}
        whileHover={{ scale: 1.05 }}
        className="p-4 border border-gray-500 rounded-lg shadow-2xl hover:shadow-2xl transition duration-300"
      >
        <Image
          src={project.image.src}
          width={100}
          height={100}
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
      <h1 className="text-2xl md:text-4xl text-center tracking-wide select-none font-medium">
        Featured Projects
      </h1>

      <div className="flex justify-center space-x-4 mb-8 mt-10">
        <button
          onClick={() => setActiveTab("frontend")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "frontend"
              ? "bg-gray-500 border border-white text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Frontend Projects
        </button>
        <button
          onClick={() => setActiveTab("fullstack")}
          className={`py-2 px-4 rounded-lg ${
            activeTab === "fullstack"
              ? "bg-gray-500 border border-white text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Fullstack Projects
        </button>
      </div>

      <div className="px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === "frontend" && renderProjects(frontendProjects)}
          {activeTab === "fullstack" && renderProjects(fullstackProjects)}
        </div>
      </div>
    </div>
  );
};
export default Projects;
