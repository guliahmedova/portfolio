"use client";
import b1 from "@/assets/images/b1.svg";
import b2 from "@/assets/images/b2.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="animated-background | bg-space_cadet bg-gradient-to-r from-blue-950 to-indigo-900 w-full h-screen text-white animated-background via-space_cadet"
      id="home"
    >
      <div className="px-10 py-4 w-full h-full flex flex-col justify-center items-center relative">
        <Image
          src={b1}
          alt="bubble"
          className="absolute top-12 left-0 m-4 w-28 h-w-28 opacity-50"
        />

        <Image
          src={b2}
          alt="bubble"
          className="absolute bottom-0 right-0 m-4 w-24 h-24 opacity-50"
        />

        <div className="w-max mb-6">
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 lg:text-5xl text-xl text-slate-300 font-bold text-center select-none">
            Creative Frontend Developer
          </h1>
        </div>

        <p className="lg:text-xl font-medium text-wrap text-center select-none">
          Passionate about building responsive, user-friendly websites with a
          focus on modern technologies and clean design
        </p>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-6">
          <motion.div
            className="bg-indigo-600 rounded-full py-3 px-6 font-semibold text-lg text-white hover:bg-indigo-700 transition duration-300 text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#work">Explore My Projects</Link>
          </motion.div>
          <motion.div
            className="bg-indigo-600 rounded-full py-3 px-6 font-semibold text-lg text-white hover:bg-indigo-700 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="#contact">Contact Me for Your Next Project</Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
