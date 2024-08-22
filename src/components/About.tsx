"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-blue-950 via-gray-900 to-indigo-950 py-16"
      id="about"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.h2
            className="text-3xl font-bold mb-4 text-white select-none"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-200 mb-8 text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hello! I’m Güli, a passionate frontend developer based in
            Azerbaijan. With a strong background in React, TypeScript, and
            Tailwind CSS, I thrive on creating beautiful, responsive web
            applications. I believe in continuous learning and enjoy exploring
            new technologies to enhance my skills. When I’m not coding, you can
            find me filming videos, diving into algorithms, or working on
            personal projects. I’m always eager to take on new challenges and
            collaborate with like-minded individuals.
          </motion.p>
          <motion.div
            className="flex space-x-4 mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="https://www.linkedin.com/in/guli-ahmedova-5b8985256/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/guliahmedova"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-4 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-300"
            >
              GitHub
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
