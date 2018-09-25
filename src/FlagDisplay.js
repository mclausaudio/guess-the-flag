import React from 'react';
import './FlagDisplay.css'

const FlagDisplay = (props) => {
    const {answer} = props
    
    return (
        <div>
            <img className="flag-display" src={answer.flag} alt='Which flag is this?'/>    
        </div>
    )
}

export default FlagDisplay;