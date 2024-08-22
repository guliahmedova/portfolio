import { furniroCover, makepickCover, plastCover } from "@/assets/images/index";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  path: string;
};

const frontendProjects: Project[] = [
  {
    id: "111",
    image: furniroCover,
    title: "Furniro",
    description: "React, TypeScript, Axios, Vite",
    path: "https://furniro-chi.vercel.app/",
  },
  {
    id: "222",
    image: plastCover,
    title: "Plast",
    description: "React, TypeScript, Axios, Vite",
    path: "https://plast.vercel.app/",
  },
  {
    id: "333",
    image: makepickCover,
    title: "MakePick",
    description: "React, TypeScript, Tailwind, Vite",
    path: "https://make-pick.vercel.app/",
  },
];

const fullstackProjects: Project[] = [
  {
    id: "444",
    image: plastCover,
    title: "Fullstack Project 1",
    description: "React, Node.js, Express, MongoDB",
    path: "https://fullstack-project1.vercel.app/",
  },
];

export { frontendProjects, fullstackProjects };