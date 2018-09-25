import React from 'react';
import './FlagDisplay.css'

const FlagDisplay = (props) => {
    const {answer} = props
    
    return (
        <div>
        <h4>Which countries flag is this?  Answer for development purposes: {answer.name}</h4>
        <img className="flag-display" src={answer.flag} />    
        </div>
    
    
    )
}

export default FlagDisplay;