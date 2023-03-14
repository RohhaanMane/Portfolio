import { useState } from "react";
import PortfolioContext from "./portfolio-context";

const PortfolioProvider = (props) =>{

    const [isThemeDark, setIsThemeDark] = useState(false);

    const themeChangeHandler = () =>{
        setIsThemeDark(prevState => !prevState);
    }

    const data = {
        theme: isThemeDark,
        themeChangeHandler: themeChangeHandler
    }
    return <PortfolioContext.Provider value={data}>
        {props.children}
    </PortfolioContext.Provider>
}

export default PortfolioProvider;