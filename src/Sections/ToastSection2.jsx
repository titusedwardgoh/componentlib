import Toast2 from "../components/Toast2/index.js";
import { BsQuestionCircleFill } from "react-icons/bs";
import React from "react"
import Toast2Display from "../components/Toast2/Toast2Display.jsx";
import Toast2Item from "../components/Toast2/Toast2Item.jsx";

export default function ToastSection2() {
    return(
        <>
        <div className = "basic-toast-container">
        <Toast2>
        <Toast2.Button>
            Basic Toast
        </Toast2.Button>
        <Toast2Display>
            {(showToast)=> {
                return (
                    showToast ? <Toast2.Item
                    message = "this is a test"
                    /> : null
                )
            }}
        </Toast2Display>
        </Toast2>
        <Toast2>
        <Toast2.Button>
            Custom Toast
        </Toast2.Button>
        <Toast2Display>
            {(showToast)=> {
                return (
                    showToast ? <Toast2.Item
                    title = "Test Toast"
                    message = "this is a test"
                    icon = {<BsQuestionCircleFill/>}
                    /> : null
                )
            }}
        </Toast2Display>
        </Toast2>
        </div>
        <h3>Severity</h3>
        <h4>Transitions</h4>
        <h4>Positions</h4>
        </>
    )
}