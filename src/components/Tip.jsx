import { IoMdClose } from "react-icons/io";
import classnames from "classnames"
import React from "react"

export default function Tip({
    title,
    darkMode = false,
    color = "gray",
    icon,
    message,
    placement,
    children,
    sticky,
    ...rest
  }) {
    const [visibility, setVisibility] = React.useState(false);
    const [isHidden, setisHidden] = React.useState(false)
  
    function showTooltip() {
      setVisibility(true);
    }
  
    function hideTooltip() {
      setVisibility(false);
    }

    function handleClick(){
        setisHidden(prev => !prev)
    }

    const allClassNames = classnames(
        "tooltip-container",
        sticky ? null: placement,
        sticky ? "sticky" : null,
        isHidden ? "hidden": null,
        darkMode ? "dark" : null,
        color,
    )

    const titleClassNames = classnames(
        "tooltip-title", 
        icon ? null: "no-icon", 
        message ? null: "no-message",
        sticky ? "sticky" : null
    )

    const textClassNames = classnames(
        "tooltip-text", 
        icon ? null: "no-icon", 
        title ? null: "no-title",
        sticky ? "sticky" : null
    )
  
    return (
      <div
        className="tooltip-trigger"
        onMouseEnter={showTooltip} 
        onMouseLeave={hideTooltip}
        {...rest} 
      >
        {sticky ? null : children}
        {(visibility || sticky) && (
          <div className = {allClassNames}>
            {icon && <span className="tooltip-icon">{icon}</span>}
            <div className="tooltip-info">
              <h3 className={titleClassNames}>{title}</h3>
              <div className= {textClassNames}>{message}</div>
            </div>
            {sticky && (
            <span className="tooltip-close" onClick = {handleClick}>
                <IoMdClose />
            </span>
        )}
          </div>
        )}
        
      </div>
    );
  }