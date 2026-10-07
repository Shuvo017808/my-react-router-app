import { Children, createContext } from "react";
import { useState } from "react";
 export const AuthContext= createContext();
export default function Authentic({children}){
    const [user,setUser] =useState(null)
    const login = (username)=>{
        setUser({
            name:username,
            email:`${username.toLowerCase()}@example.com`
        })
    }
    const logout =()=>{
        setUser(null);
    }

    return(
        <AuthContext.Provider value ={{user,login,logout}}>{children}</AuthContext.Provider>
    )
}