import React from "react"
import Badge from "../components/Badge"
import { nanoid } from 'nanoid'

export default function ButtonSection() {

    const colors = ["gray", "red", "yellow", "green", "blue", "indigo","purple","pink"]

    return (
        <>
        <div className = "badge-row">
        <Badge>default</Badge>
        {colors.map((color)=>{
          return (
            <Badge key = {nanoid()} color = {color} rounded = {false}>badge</Badge>
          )  
        })}
      </div>
      <div className = "badge-row">
        <Badge size = "medium">default</Badge>
        {colors.map((color)=>{
          return (
            <Badge key = {nanoid()} color = {color} rounded = {false} size = "medium">badge</Badge>
          )  
        })}
      </div>
      <div className = "badge-row">
        <Badge size = "small">default</Badge>
        {colors.map((color)=>{
          return (
            <Badge key = {nanoid()} color = {color} rounded = {false} size = "small">badge</Badge>
          )  
        })}
      </div>
      <h3>Badge Rounded</h3>
      <div className = "badge-row">
        <Badge size = "medium" rounded = {true}>default</Badge>
        {colors.map((color)=>{
          return (
            <Badge key = {nanoid()} size = "medium" color = {color} rounded = {true}>badge</Badge>
          )  
        })}
      </div>
      </>
    )
}