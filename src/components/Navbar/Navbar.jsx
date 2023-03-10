import React, { useState, useContext } from "react";
import PortfolioContext from "../../context/portfolio-context";
import logo from "./assets/minesh-logo.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const themeCtx = useContext(PortfolioContext);

  const navLinks = [
    { name: "home", link: "/" },
    { name: "about", link: "/" },
    { name: "skills", link: "/" },
    { name: "contact", link: "/" },
  ];

  const navItems = navLinks.map((item) => (
    <li key={item.link + item.name} className=" text-xl md:px-3  md:my-0 my-7 ">
      {" "}
      <a href={item.link} className="hover:text-gray-500 ">
        {item.name}
      </a>
    </li>
  ));

  // Theme Toggle Handler
  const themeChangeHandler = (event) => {
    event.preventDefault();

    console.log(themeCtx);
    themeCtx.themeChangeHandler();
  };

  return (
    <>
      <nav className="w-full ">
        <div className="md:max-w-[80%]  mx-auto md:flex md:items-center md:justify-between py-5">
          <div className="font-bold items-center text-2xl cursor-pointer flex">    {/* bg-[#90a0d9]*/}
            <img src={logo} alt="logo" className="h-10 mx-5 "></img>
          </div>

          <div
            onClick={() => setOpen(!open)}
            className="text-3xl  absolute right-8 top-5 cursor-pointer md:hidden"
          >
            <ion-icon
              className="transition-all duration-500 ease-in-out"
              name={open ? "close" : "menu"}
            ></ion-icon>
          </div>
          <div
            className={`md:flex items-center uppercase md:pb-0 pb-12 absolute md:static md:z-auto z-[2]        md:right-0 pl-[100%] right-0 md:w-auto md:pl-0 pr-10 transition-all  backdrop-blur-sm duration-500  ease-in-out ${
              open
                ? "top-15 opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            } `}
          >
            <ul className={`md:flex md:items-center ${themeCtx.theme ? "text-[#bdbddd]" : ''}`}>{navItems}</ul>

            <label className="swap swap-flip mx-3  w-8 h-8 md:px-3  md:my-0 my-1 ">
              <input type="checkbox" onClick={themeChangeHandler} />

              {/* Conditional Rendering */}
              {themeCtx.theme && (
                <svg
                  className="fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
              )}

              {!themeCtx.theme && (
                <svg
                  className="fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              )}
            </label>
          </div>
        </div>
      </nav>
      <section className=""></section>
    </>
  );
};

export default Navbar;
