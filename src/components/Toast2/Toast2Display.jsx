import React from "react"
import { Toast2Context } from "./Toast2"

export default function Toast2Display({children}){

    const {showToast} = React.useContext(Toast2Context)

    return (
        <div className="toast-container">
        {children(showToast)}
        </div>
    )

}