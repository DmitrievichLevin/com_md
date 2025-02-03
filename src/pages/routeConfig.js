import about from "./about/about";
import projects from "./projects/projects";
import work from "./work/work";

export default [
  { name: "about", path: "/", Component: about },
  { name: "work", path: "/work", Component: work },
  { name: "projects", path: "/projects", Component: projects },
];
