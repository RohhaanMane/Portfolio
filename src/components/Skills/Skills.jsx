import { useContext } from "react";
import PortfolioContext from "../../context/portfolio-context";

const Skills = (props) => {

  const themeCtx = useContext(PortfolioContext);
  const customWhite = themeCtx.theme ? "text-[#cdcdff]" : '';

  //Dummy Data
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "SASS",
    "Material UI",
    "Git",
    "CI/CD",
    "Jest",
    "Enzyme",
  ];

  return (
    <section id="skills" >
      <h2 className={`text-3xl font-bold text-center text-[#444444] mt-20 my-5 ${customWhite}`}>
        SKILLS
      </h2>
      <ul className="flex flex-wrap justify-center m-2 mt-5 md:max-w-[28.125rem] md:m-auto">
        {skills.map(skill => <li className={`px-[1.26rem] py-[0.72rem] m-[0.45rem] text-[0.9rem] text-[#444444] font-medium border rounded shadow-xl ${customWhite}`}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;
