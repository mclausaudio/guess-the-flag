import React, {Component} from 'react';
import './GuessForm.css';

class GuessForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            userChoice: undefined
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(e) {
        this.setState({userChoice: e.target.value})
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.userChoice);
        this.setState({userChoice: undefined})
    }
    
    render(){
        const {flags} = this.props;

        let answers = flags.map((f, i) => (
            <label key={i}>
                <input type="radio" 
                        name="Country"
                        value={f.name}
                        checked={this.state.userChoice === f.name}
                        onChange={this.handleChange}
                        />
                {f.name}
            </label>

        ))
        
        return (
            <div className="answer-input">
                <form onSubmit={this.handleSubmit}>
                    {answers}
                    <button type='submit'>Submit Guess</button>
                </form>
            </div>
        )
    }
    
}

export default GuessForm;