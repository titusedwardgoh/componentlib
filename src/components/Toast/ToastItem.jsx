import React from "react"
import { IoMdClose } from "react-icons/io";
import classnames from "classnames"

export default function ToastItem({icon, message,title, close}){

    const [isVisible,setIsVisible] = React.useState(true)

    function handleClose() {
        setIsVisible(false)
    }

    const allClassNames = classnames(
        "toast-item-container",
        isVisible ? null : "hidden"
    )

     const titleClassNames = classnames(
            "toast-title", 
            icon ? null: "no-icon", 
            message ? null: "no-message",
        )
    
        const textClassNames = classnames(
            "toast-text", 
            icon ? null: "no-icon", 
            title ? null: "no-title",
        )

    return(
        <div className = {allClassNames}>
        {icon && <span className="toast-icon">{icon}</span>}
        <div className="toast-info">
            <h3 className={titleClassNames}>{title}</h3>
            <div className= {textClassNames}>{message}</div>
        </div>
        {close && (
            <span className="toast-close" onClick={handleClose}>
                <IoMdClose />
            </span>
        )}
        </div>
    )
}