import {
  furniroCover,
  issueSolverCover,
  makepickCover,
  plastCover,
} from "@/assets/images/index";
import { StaticImageData } from "next/image";
import { v4 as uuidv4 } from "uuid";

export interface Project {
  id: string;
  image: StaticImageData;
  title: string;
  description: string;
  path: string;
}

const frontendProjects: Project[] = [
  {
    id: uuidv4(),
    image: furniroCover,
    title: "Furniro",
    description: "React, TypeScript, Axios, Vite",
    path: "https://furniro-chi.vercel.app/",
  },
  {
    id: uuidv4(),
    image: plastCover,
    title: "Plast",
    description: "React, TypeScript, Axios, Vite",
    path: "https://plast.vercel.app/",
  },
  {
    id: uuidv4(),
    image: makepickCover,
    title: "MakePick",
    description: "React, TypeScript, Tailwind, Vite",
    path: "https://make-pick.vercel.app/",
  },
  {
    id: uuidv4(),
    image: issueSolverCover,
    title: "Issue Solver",
    description: "Next, TypeScript, Tailwind, Vite, SWR, Material UI, Zustand",
    path: "https://issue-solver.vercel.app/",
  },
];

const fullstackProjects: Project[] = [
  {
    id: uuidv4(),
    image: plastCover,
    title: "Fullstack Project 1",
    description: "React, Node.js, Express, MongoDB",
    path: "https://fullstack-project1.vercel.app/",
  },
];

export { frontendProjects, fullstackProjects };
