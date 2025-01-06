import Tip from "../components/Tip";
import { IoCloudUploadOutline } from "react-icons/io5";
import { nanoid } from 'nanoid'
import React from "react"

export default function TipSection() {

    const placementArray  = ["top","bottom", "left", "right"]
    const colorsArray = ["gray","blue","purple","green"]

    return (
        <>
        <h3>Basic ToolTip</h3>
        <Tip 
        message = "Lorem ipsum"
        placement = "left"
        color= "blue"
        > 
        <button className = "tooltip-button">Hover over me!</button>
        </Tip>
        <h3>ToolTip Placements</h3>
            {placementArray.map((direction)=> {
                return (
                        <Tip 
                            title = "Tool Tip Title" 
                            message = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur. "
                            placement = {direction}
                            key = {nanoid()}
                            color = "purple"
                            darkMode = {true}
                            >
                            <button className = "tooltip-button">{direction}</button>
                        </Tip>
                )
            })}
        <h3>ToolTip with Icon and Title</h3>
        <Tip 
        title = "There is a title"
        message = "I have many messages for you"
        icon = {<IoCloudUploadOutline/>}
        placement = "top"
        >
        <button className = "tooltip-button">Custom ToolTip</button>
        </Tip>
        <h3>ToolTip Themes</h3>
        <div className = "tooltip-placement-container">

            {colorsArray.map((color,index)=>{
                return(
                    <React.Fragment key={`color-${color}-${index}`}>
                    <Tip 
                    title = "This is a custom sticky tip"
                    message = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                    icon = {<IoCloudUploadOutline/>}
                    placement = "right"
                    sticky = {true}
                    darkMode = {true}
                    color = {color}
                    key= {`color-${color}-${nanoid()}`}
                    >
                    <span>Custom ToolTip</span>
                    </Tip>
                    <Tip 
                    title = "This is a custom sticky tip"
                    message = "Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum tenetur."
                    icon = {<IoCloudUploadOutline/>}
                    placement = "right"
                    sticky = {true}
                    color = {color}
                    key = {nanoid()}
                    >
                    </Tip>
                    </React.Fragment>
                )
            })}
            
            
        </div>
        </>
    )
}