import { ToggleContext } from "./Toggle";
import React from "react"

export default function ToggleOff({children}){
    const {on} = React.useContext(ToggleContext)

    return !on ? 
            <span>{children}</span> : null
    
}
