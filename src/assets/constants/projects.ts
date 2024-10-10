import {
  angularAdminCover,
  bookingPanelCover,
  brandCover,
  datavistaCover,
  dsiCover,
  filteringCover,
  formStepperCover,
  furniroCover,
  imgSearchCover,
  issueSolverCover,
  jobPortalCover,
  makepickCover,
  manageCover,
  miniFrontendProjects,
  plastCover,
  tmdbCover,
} from "@/assets/images/index";
import { v4 as uuidv4 } from "uuid";

export interface Project {
  id: string;
  image: string;
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
    image: tmdbCover,
    title: "TMDb Clone",
    description: "React, Vite, Tailwind CSS, Axios, Redux Tookit",
    path: "https://tmdb-pearl.vercel.app/",
  },
  {
    id: uuidv4(),
    image: angularAdminCover,
    title: "Angular Admin Panel",
    description: "Angular 18",
    path: "https://angular-admin-panel-sigma.vercel.app/login",
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
  {
    id: uuidv4(),
    image: bookingPanelCover,
    title: "Booking Panel",
    description: "JavaScript, HTML, CSS",
    path: "https://booking-panel-ivory.vercel.app/",
  },
  {
    id: uuidv4(),
    image: filteringCover,
    title: "Filtering",
    description: "NextJs, React-Query, TailwindCss",
    path: "https://filter-products-green.vercel.app/",
  },
  {
    id: uuidv4(),
    image: miniFrontendProjects,
    title: "Html, Css and Js Projects",
    description: "HTML5, CSS, JavaScript",
    path: "https://js-projects-jade-pi.vercel.app/",
  },
  {
    id: uuidv4(),
    image: brandCover,
    title: "Brand",
    description: "React",
    path: "https://brand-project.vercel.app/",
  },
  {
    id: uuidv4(),
    image: dsiCover,
    title: "DSI",
    description: "React",
    path: "https://dsi-o6e9.vercel.app/",
  },
  {
    id: uuidv4(),
    image: datavistaCover,
    title: "DataVista",
    description: "React, TypeScript, Ant Design",
    path: "https://data-vista-dashboard.vercel.app/",
  },
  {
    id: uuidv4(),
    image: jobPortalCover,
    title: "JobHunt",
    description: "JavaScript, Html, CSS",
    path: "https://astonishing-crostata-678d96.netlify.app/home",
  },
  {
    id: uuidv4(),
    image: manageCover,
    title: "Manage",
    description: "HTML, CSS",
    path: "https://manage-henna.vercel.app/",
  },
  {
    id: uuidv4(),
    image: formStepperCover,
    title: "React Form Stepper",
    description: "React, TailwindCSS, TypeScript",
    path: "https://react-form-stepper-phi.vercel.app/",
  },
  {
    id: uuidv4(),
    image: imgSearchCover,
    title: "Image Search App",
    description: "JavaScript, Html, CSS",
    path: "https://image-search-app-theta.vercel.app/",
  },
];

export { frontendProjects };
