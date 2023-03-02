import React, { Fragment } from "react";
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
    <Fragment>
      <h2>Projects</h2>
      <div className="project__grid">
        <div className="project">
          <h3>{projects[0].name}</h3>
          <p className="project__description">{projects[0].description}</p>

          {/* {<ul className="project-stack">
                        {projects[0].stack.map(item=>{
                            <li className="project-stack__item">{item}</li>
                        })}
                        </ul>} */}

          {/* {
                        <ul>
                           {projects[0].stack.map(item=>{
                            <li>{item}</li>
                           })} 
                        </ul>
                    } */}

          <ul className="project-stack">
            {projects[0].stack.map((item) => (
              <li  className="project-stack__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
