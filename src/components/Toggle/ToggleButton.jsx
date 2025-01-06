import React from "react"
import { ToggleContext } from "./Toggle";

export default function ToggleButton({children}){
    const {toggleOn} = React.useContext(ToggleContext)

    return (
        <span onClick={toggleOn} style={{ cursor: "pointer" }}>
            {children}
        </span>
    )
}
