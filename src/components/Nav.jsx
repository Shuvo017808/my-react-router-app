import {UserTheme} from "../context/ThemeContext";
import { useContext } from "react";
import { Link } from "react-router";
export default function Navbar(){
    const {theme,handleClick}= useContext(UserTheme);
    return(
        <nav>
            <button onClick={handleClick}>{theme === "light"? "dark" : "light"}</button>
          <Link to ="/">home </Link>
          <Link to = "/products"> Products</Link> 

        </nav>
    )
}