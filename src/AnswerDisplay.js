import React from 'react';
import './AnswerDisplay.css'

const AnswerDisplay = (props) => {
    let {isCorrect, answer, onReset} = props
    let message;
    if(isCorrect === "true") {
        message = <p>You are correct!  This flag belongs to {answer.name}!</p>;
    } else {
        message = <p>I'm sorry, the correct answer is {answer.name}!</p>;
    }
    
    return (
        <div className='answer-display'>
            {message}
            <button onClick={onReset}>Play Again?</button>
        </div>
    )
}

export default AnswerDisplay;