import './InfoBar.css'

import React from "react";

function InfoBar( { text } ) {
    return (
        <div className="UI_infoBar">   
            {text}
        </div>
    )
}   

export default InfoBar