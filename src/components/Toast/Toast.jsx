import React from "react"
import classnames from "classnames"
import { IoMdClose } from "react-icons/io";
import ToastItem from "./ToastItem";

const ToastContext = React.createContext()

export default function Toast({children}){

    const [toastArray,setToastArray] = React.useState([])

    function addToast(content) {
    setToastArray((prev) => [...prev, content]);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      setToastArray((prev) => prev.slice(1)); // Remove the first toast
    }, 5000)
}
    return (
        <>
        <ToastContext.Provider value = {{toastArray, setToastArray,addToast}}>
            {children}
        </ToastContext.Provider>
        { toastArray.length >0 && (<div className="toast-container">
            {toastArray.map((toast, index) => (
            <ToastItem key={index} {...toast} />
            ))}
        </div>)}
        </>
    )

}

export {ToastContext}