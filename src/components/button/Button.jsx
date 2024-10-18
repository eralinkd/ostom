import './Button.css'

import React from "react";

function Button({text, onClick, big}) {
    return (
        <div role='button' className={`UI_button ${big ? 'big' : ''}`} onClick={onClick}>
            <span className='f-14'>{text}</span>
        </div>
    );
}

export default Button