// This component will blur and unblur the page whenever the nav bar is opened or closed
import React from "react";
import "./Backdrop.css"


export const Backdrop = props => (
    <div className="backdrop" onClick={props.click}/>
)