import React, { Fragment } from "react";

const ProjectContainer = (props) => {
  return (
    <Fragment>
      <div className="pt-10 pb-10 text-center bg-slate-700 border-solid border border-slate-800 rounded-sm mx-3 shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.project.name}</h3>
        <p className="my-4 text-gray-400">{props.project.description}</p>

        <ul className="flex flwx-row justify-center space-x-2 ">
          {props.project.stack.map((item) => (
            <li className="border-solid border bg-slate-600 p-1">{item}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default ProjectContainer;
