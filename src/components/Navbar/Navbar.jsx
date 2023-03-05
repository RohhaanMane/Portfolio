import React from "react";
import logo from "./assets/minesh-logo.svg"
const Navbar =()=>{

    // const navLinks = ["home", "skills","projects", "contact"]

    // const Nav = navLinks.map(item =>  {return <li> {item} </li>})

    return(
    <>
        <nav className="flex-auto flex-row gap-1 m-2 ">
            <div>
                <img className="w-10" alt="logo" src={logo}/>
            </div>
            <ul className="">      
                <li>home</li>
                <li>skills</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar