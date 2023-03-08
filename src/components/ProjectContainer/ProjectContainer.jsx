import React, { Fragment } from "react";

const ProjectContainer = (props) => {
  return (
    <div className="card w-96 border bg-base-100 shadow-xl m-2 p-8 transition ease-in-out duration-200 transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold text-center text-[#444444]">
        {props.project.name}
      </h3>
      <p className="pt-3 text-[#555555] text-center">
        {props.project.description}
      </p>
      <ul className="flex flwx-row justify-center my-5">
        {props.project.stack.map((item) => (
          <li className="p-2 text-[0.8rem] text-[#444444] font-medium">{item}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <ion-icon name="logo-github" size="large"></ion-icon>
        <ion-icon name="eye-sharp" size="large"></ion-icon>
      </div>
    </div>
  );
};

export default ProjectContainer;

{
  /* <div className="card-normal  justify-center pt-10 pb-10 text-center bg-slate-700 border-solid border border-slate-800 rounded-md  shadow-xl">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{props.project.name}</h3>
        <p className="my-4 text-gray-400">{props.project.description}</p>

        <ul className="flex flwx-row justify-center space-x-2 ">
          {props.project.stack.map((item) => (
            <li className="border-solid border bg-slate-600 p-1">{item}</li>
          ))}
        </ul>
      </div> */
}
