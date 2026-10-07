import { useState,createContext } from "react";
import { useEffect } from "react";
export const UserTheme= createContext();
export default function ThemeConText({children}){
    const [theme,setTheme] = useState("light");
    const handleClick =()=>{
        setTheme(theme === "light"? "dark":"light")
    }
    useEffect(()=>{
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
    },[theme])
    return(
  <UserTheme.Provider value={{theme,handleClick}}>
    {children}
  </UserTheme.Provider>
    )
}