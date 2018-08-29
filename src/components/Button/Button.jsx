import React from 'react';

import './Button.css';

const Button = ({name}) => {
    return(
        <div className="nav-button">   
            <button type="button">{name}</button>
        </div>
    )
}

export default Button;