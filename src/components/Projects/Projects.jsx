import React, { Fragment } from "react";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./Projects.css";

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
    <div>
      <h1 className="text-3xl text-center my-8 text-sky-100">Projects</h1>

      <div className="flex flex-row justify-evenly">
        {projects.map((project) => {
          return <ProjectContainer project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
