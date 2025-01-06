import React from "react"

const ToggleContext = React.createContext()

export default function Toggle({children,}) {

    const [on, setOn] = React.useState(false)
    
    function toggleOn() {
        setOn(prev => !prev)
    }

    return(
        <>
        <ToggleContext.Provider value = {{on,toggleOn}}>
            {children}
        </ToggleContext.Provider>
        </>
    )
}

export {ToggleContext}