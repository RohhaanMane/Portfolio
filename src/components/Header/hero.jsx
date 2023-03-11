import React from "react";


const Hero = () =>{
    return(
        <>
           <section className="max-w-[80%] m-auto my-[3rem]" >
           <div className="flex flex-col items-center ">
            <h2 className="text-3xl font-bold md:text-[4rem] md:mt-[6rem] md:pb-2">Hi, I am <span className="text-[#2978b5]">Minesh Rajput</span></h2>
            <h3 className="text-xl font-medium mt-3 mb-8 md:text-3xl md:mb-[4rem]">Front End Engineer.</h3>
            <p className="indent-10 justify-content md:text-lg  md:max-w-[70%]">Whether you need a simple website or a complex web application, I can help bring your ideas to life. I have experience working with a variety of projects. My focus is always on delivering a high-quality product that meets your business objectives.</p>
            </div>
           </section>
        </>
    )
}
export default Hero