import React, { Fragment } from "react";

const ProjectContainer = (props) => {
  return (
    // <h1>HOla from container</h1>
    <div className="card w-96 bg-base-100 shadow-xl ml-1.5 mr-1.5 h-60">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-black">Project</h3>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;

{/* <div className="card-normal  justify-center pt-10 pb-10 text-center bg-slate-700 border-solid border border-slate-800 rounded-md  shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.project.name}</h3>
        <p className="my-4 text-gray-400">{props.project.description}</p>

        <ul className="flex flwx-row justify-center space-x-2 ">
          {props.project.stack.map((item) => (
            <li className="border-solid border bg-slate-600 p-1">{item}</li>
          ))}
        </ul>
      </div> */}