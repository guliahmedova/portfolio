import angularİcon from "@/assets/images/Angular.svg";
import antDesignIcon from "@/assets/images/ant-design.svg";
import axiosIcon from "@/assets/images/axios.svg";
import babelIcon from "@/assets/images/babelIcon.svg";
import bootstrapIcon from "@/assets/images/bootstrapIcon.svg";
import cssIcon from "@/assets/images/cssIcon.svg";
import ejsIcon from "@/assets/images/ejsIcon.svg";
import expressIcon from "@/assets/images/express.svg";
import formikIcon from "@/assets/images/formikIcon.svg";
import gitIcon from "@/assets/images/git.svg";
import githubIcon from "@/assets/images/github.svg";
import gitlabIcon from "@/assets/images/gitlab.svg";
import htmlIcon from "@/assets/images/html.svg";
import javascriptIcon from "@/assets/images/javascriptIcon.svg";
import jqueryIcon from "@/assets/images/jqueryIcon.svg";
import jsonIcon from "@/assets/images/jsonIcon.svg";
import mongodbIcon from "@/assets/images/mongodbIcon.svg";
import muiIcon from "@/assets/images/muiIcon.svg";
import nextjsIcon from "@/assets/images/nextjsIcon.svg";
import nodeIcon from "@/assets/images/nodeIcon.svg";
import nodemonIcon from "@/assets/images/nodemonIcon.svg";
import postgressqlIcon from "@/assets/images/postgressql.svg";
import postmanIcon from "@/assets/images/postman.svg";
import reactBIcon from "@/assets/images/reactBIcon.svg";
import reactIcon from "@/assets/images/reactIcon.svg";
import reduxIcon from "@/assets/images/reduxIcon.svg";
import restApiIcon from "@/assets/images/rest-api.svg";
import sassIcon from "@/assets/images/sassIcon.svg";
import swaggerIcon from "@/assets/images/swagger.svg";
import swrIcon from "@/assets/images/swr.png";
import tailwindIcon from "@/assets/images/tailwindcss.svg";
import typescriptIcon from "@/assets/images/typescriptIcon.svg";
import viteIcon from "@/assets/images/viteIcon.svg";
import zodIcon from "@/assets/images/zod.svg";
import zustandIcon from "@/assets/images/zustandIcon.png";
import { v4 as uuidv4 } from "uuid";

export interface Skill {
  id: string;
  title: string;
  icon: string;
  url: string;
}

const skills: Skill[] = [
  {
    id: uuidv4(),
    title: "Angular",
    icon: angularİcon,
    url: "https://angular.dev/",
  },
  {
    id: uuidv4(),
    title: "HTML",
    icon: htmlIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: uuidv4(),
    title: "JavaScript",
    icon: javascriptIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: uuidv4(),
    title: "TypeScript",
    icon: typescriptIcon,
    url: "https://www.typescriptlang.org/",
  },
  {
    id: uuidv4(),
    title: "React",
    icon: reactIcon,
    url: "https://reactjs.org/",
  },
  {
    id: uuidv4(),
    title: "React Bootstrap",
    icon: reactBIcon,
    url: "https://react-bootstrap.netlify.app/",
  },
  {
    id: uuidv4(),
    title: "Redux Toolkit",
    icon: reduxIcon,
    url: "https://redux-toolkit.js.org/",
  },
  {
    id: uuidv4(),
    title: "RTK Query",
    icon: reduxIcon,
    url: "https://redux-toolkit.js.org/rtk-query/overview",
  },
  {
    id: uuidv4(),
    title: "Zustand",
    icon: zustandIcon,
    url: "https://zustand-demo.pmnd.rs/",
  },
  {
    id: uuidv4(),
    title: "Next.js",
    icon: nextjsIcon,
    url: "https://nextjs.org/",
  },
  {
    id: uuidv4(),
    title: "jQuery",
    icon: jqueryIcon,
    url: "https://jquery.com/",
  },
  {
    id: uuidv4(),
    title: "Formik",
    icon: formikIcon,
    url: "https://formik.org/",
  },
  {
    id: uuidv4(),
    title: "Zod",
    icon: zodIcon,
    url: "https://zod.dev/",
  },
  {
    id: uuidv4(),
    title: "EJS",
    icon: ejsIcon,
    url: "https://ejs.co/",
  },
  {
    id: uuidv4(),
    title: "Node.js",
    icon: nodeIcon,
    url: "https://nodejs.org/",
  },
  {
    id: uuidv4(),
    title: "CSS",
    icon: cssIcon,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: uuidv4(),
    title: "SASS",
    icon: sassIcon,
    url: "https://sass-lang.com/",
  },
  {
    id: uuidv4(),
    title: "Bootstrap",
    icon: bootstrapIcon,
    url: "https://getbootstrap.com/",
  },
  {
    id: uuidv4(),
    title: "Material UI",
    icon: muiIcon,
    url: "https://mui.com/",
  },
  {
    id: uuidv4(),
    title: "Ant Design",
    icon: antDesignIcon,
    url: "https://ant.design/",
  },
  {
    id: uuidv4(),
    title: "Tailwind CSS",
    icon: tailwindIcon,
    url: "https://tailwindcss.com/",
  },
  {
    id: uuidv4(),
    title: "Git",
    icon: gitIcon,
    url: "https://git-scm.com/",
  },
  {
    id: uuidv4(),
    title: "GitLab",
    icon: gitlabIcon,
    url: "https://about.gitlab.com/",
  },
  {
    id: uuidv4(),
    title: "GitHub",
    icon: githubIcon,
    url: "https://github.com/",
  },
  {
    id: uuidv4(),
    title: "REST API",
    icon: restApiIcon,
    url: "https://www.ibm.com/topics/rest-apis",
  },
  {
    id: uuidv4(),
    title: "Axios",
    icon: axiosIcon,
    url: "https://axios-http.com/",
  },
  {
    id: uuidv4(),
    title: "SWR",
    icon: swrIcon,
    url: "https://swr.vercel.app/",
  },
  {
    id: uuidv4(),
    title: "Swagger",
    icon: swaggerIcon,
    url: "https://swagger.io/",
  },
  {
    id: uuidv4(),
    title: "Express",
    icon: expressIcon,
    url: "https://expressjs.com/",
  },
  {
    id: uuidv4(),
    title: "Postman",
    icon: postmanIcon,
    url: "https://www.postman.com/",
  },
  {
    id: uuidv4(),
    title: "Vite",
    icon: viteIcon,
    url: "https://vitejs.dev/",
  },
  {
    id: uuidv4(),
    title: "PostgresSQL",
    icon: postgressqlIcon,
    url: "https://www.postgresql.org/",
  },
  {
    id: uuidv4(),
    title: "MongoDB",
    icon: mongodbIcon,
    url: "https://www.mongodb.com/",
  },
  {
    id: uuidv4(),
    title: "JSON",
    icon: jsonIcon,
    url: "https://www.json.org/json-en.html",
  },
  {
    id: uuidv4(),
    title: "Babel",
    icon: babelIcon,
    url: "https://babeljs.io/",
  },
  {
    id: uuidv4(),
    title: "Nodemon",
    icon: nodemonIcon,
    url: "https://nodemon.io/",
  },
];

export default skills;
