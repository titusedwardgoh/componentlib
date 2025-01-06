import React from "react"
import { TiTick } from "react-icons/ti";
import { IoIosWarning } from "react-icons/io";
import { VscError } from "react-icons/vsc";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import classnames from "classnames"

export default function Banner({children, title, status = "error", ...rest}) {

    const [isVisible,setIsVisible] = React.useState(true)

    function closeBanner() {
        setIsVisible(prev => !prev)
    }

    let statusIcon
    if (status === "success") {
        statusIcon = TiTick
    }
    else if (status === "update") {
        statusIcon = BsQuestionCircleFill
    }
    else if (status === "warning") {
        statusIcon = VscError
    }

    else {
        statusIcon = IoIosWarning
    }

    const allClassNames = classnames("banner",status, isVisible ? null : "hidden") 

    let titleText

    if (title) {
        titleText = title.charAt(0).toUpperCase() + title.slice(1) + " Banner"
    }

    else {
        titleText = status.charAt(0).toUpperCase() + status.slice(1) + " Banner"
        
    }

    return (
        <>
        <div className = {allClassNames} onClick = {closeBanner}>
            {statusIcon && React.createElement(statusIcon, { className: "icon" })}
            <div className = "banner-text-section">
                <h3 className = "banner-title">{titleText}</h3>
                <span className = {`banner-children ${children ? null : "hidden"}`}>
                {children}
                </span>
            </div>
            <span className = "banner-close">
                <IoMdClose />
            </span>
        </div>
        </>
    )

}