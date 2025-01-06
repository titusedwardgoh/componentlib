import React from "react"
import classnames from "classnames"

const Toast2Context = React.createContext()

export default function Toast2({children}){

    const [showToast,setShowToast] = React.useState(false)

    const toastPop = () => {
        setShowToast(true); 
        setTimeout(() => {
          setShowToast(false); 
        }, 3000);
      }
        return (
        <>
        <Toast2Context.Provider value = {{toastPop,showToast}}>
            {children}     
        </Toast2Context.Provider>
        </>
    )

}

export {Toast2Context}