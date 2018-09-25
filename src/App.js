import React, { Component } from 'react';
import GuessForm from './GuessForm';
import FlagDisplay from './FlagDisplay';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      flags: [], 
      answer: [],
      userChoice: ''
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.evaluateAnswer = this.evaluateAnswer.bind(this);
    this.resetGame = this.resetGame.bind(this)
  }
  
  componentDidMount(){
    const allCountries = 'https://restcountries.eu/rest/v2/all'
    
    fetch(allCountries)
    .then(countries => countries.json())
    .then(countries => {
      let flags = [];
      
      for (let i = 0; i<4; i++){
        let randomIndex = Math.floor(Math.random() * countries.length)
        flags.push(countries[randomIndex])
      }
      
      let answer = flags[Math.floor(Math.random() * flags.length)]
      
      this.setState({countries, flags, answer})
    })
  }
  
  handleSubmit(userChoice) {
    this.setState({userChoice})
    this.evaluateAnswer(userChoice);
  }
  
  evaluateAnswer(userChoice) {
    userChoice === this.state.userChoice ? 
    alert('Yes!') : alert('No!');
  }
  
  render() {
    let views = <div>Loading...</div>
    const {countries, flags, answer} = this.state;
    
    if(countries.length > 0) {
      views = flags.map(c => (
        <div>
          <p>{c.name}</p>
          <img src={c.flag}  alt={c.name}/>
        </div>
      ))  
    }

    return (
      <div className="App">
        <h1>Guess The Flag</h1>
        
        <GuessForm flags={flags} onSubmit={this.handleSubmit}/>
        <FlagDisplay flags={flags} answer={answer}/>
      </div>
    );
  }
}

export default App;
