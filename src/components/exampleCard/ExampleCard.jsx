import './ExampleCard.css'

import React from "react";

function ExampleCard(props) {

    return (
        <div className="UI_exampleCard">
            <div className="number">{props.number}</div>
            <img width="43" height="43" src={props.img} className="icon" alt="example icon"></img>
            <p className="title f-20">{props.title}</p>
        </div>
    )
}

export default ExampleCard