import { ToggleContext } from "./Toggle";
import React from "react"

export default function ToggleRender({children}) {

    const {on} = React.useContext(ToggleContext)

    return children(on)
}