import React from "react"
import classnames from "classnames"

export default function Badge({color = "gray", size = "large", rounded = false, children, ...rest}) {

    const allClassNames = classnames("badge", size, color, rounded ? "round":null)

    return (
        <>
        <span className = {allClassNames}>
        {children}
        </span>
        </>
    )
}