import React, { Fragment } from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
// import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      name: "Project 1",
      description:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      stack: ["SASS", "TypeScript", "React"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
    {
      name: "Project 2",
      description:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      stack: ["SASS", "TypeScript", "React"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
    {
      name: "Project 3",
      description:
        "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
      stack: ["SASS", "TypeScript", "React"],
      sourceCode: "https://github.com",
      livePreview: "https://github.com",
    },
  ];
  return (
    // <h1>Hola</h1>
    <div>
      <h1 className="text-2xl font-bold font-sans text-black">Projects</h1>
      <div className="flex flex-wrap border-amber-400 p-3 justify-center">
        {
          projects.map(project=>{
            return <ProjectContainer project={project} />
          })
        }
      </div>
    </div>
  );
};

export default Projects;

{
  /* <>
      <div className="grid-flow-row">
        <h1 className="text-3xl text-center my-8 text-sky-100">Projects</h1>

        <div className="flex justify-around justify-items-center">
          {projects.map((project) => {
            return <ProjectContainer project={project} />;
          })}
        </div>
      </div>
    </> */
}
