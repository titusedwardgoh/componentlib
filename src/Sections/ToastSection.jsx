import Toast from "../components/Toast/index.js";
import { BsQuestionCircleFill } from "react-icons/bs";
import React from "react"

export default function ToastSection() {
    return (
        <div>
        <div className = "basic-toast-container">
            <Toast>
                <Toast.Button
                buttonTitle =  "Basic Toast" 
                title = "This is a Basic Toast" 
                message = "This is a test Toast">
                </Toast.Button>
                <Toast.Button 
                buttonTitle =  "Custom Toast" 
                title = "Basic Toast 2" 
                message = "This is a test Toast"
                icon = {<BsQuestionCircleFill/>}
                close = {true}
                >
                </Toast.Button>
            </Toast>
        </div>    
        <h3>Severity</h3>
        <h4>Transitions</h4>
        <h4>Positions</h4>
        </div>
    )
}