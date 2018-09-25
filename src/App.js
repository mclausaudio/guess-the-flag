import React, { Component } from 'react';
import GuessForm from './GuessForm';
import FlagDisplay from './FlagDisplay';
import AnswerDisplay from './AnswerDisplay';

import './App.css';
import flagsImg from './flags2.jpeg';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      flags: [], 
      answer: [],
      userChoice: '',
      isPlaying: true,
      isCorrect: false
    }
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.evaluateAnswer = this.evaluateAnswer.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }
  
  componentDidMount(){
    const allCountries = 'https://restcountries.eu/rest/v2/all'
    
    fetch(allCountries)
    .then(countries => countries.json())
    .then(countries => {
      this.setState({countries})
      this.handleReset(countries);
    })
  }
  
  handleSubmit(userChoice) {
    this.setState({userChoice})
    this.evaluateAnswer(userChoice);
  }
  
  evaluateAnswer(userChoice) {
    if (userChoice === this.state.answer.name) {
      this.setState({isPlaying: false, isCorrect: true});
    } else {
      this.setState({isPlaying: false, isCorrect: false})
    }
  }
  
  handleReset(){
    let countries = this.state.countries;
    let flags = [];
      for (let i = 0; i < 4; i++){
        let randomIndex = Math.floor(Math.random() * countries.length)
        flags.push(countries[randomIndex])
      }
      let answer = flags[Math.floor(Math.random() * flags.length)];
      
      this.setState({
        flags: flags,
        answer: answer,
        isPlaying: true,
        isCorrect: false
      });
  }
  
  render() {
    const {flags, answer, isPlaying, isCorrect} = this.state;
    let game;
    if(isPlaying){
      game = <GuessForm flags={flags} onSubmit={this.handleSubmit}/>
    } else {
      game = <AnswerDisplay isCorrect={isCorrect.toString()} answer={answer} onReset={this.handleReset}/>
    }

    return (
        <div className="App">
          <div className="title-bar" style={{ backgroundImage: `url(${flagsImg})` }}>
            <h1 className='title'>Guess The Flag</h1>
          </div>
          <div className="game-container">
            {game}
          </div>
          <FlagDisplay flags={flags} answer={answer}/>
          <footer>
            <p>This application was built with React by <a href="http://www.michaelclaus.io">Michael Claus</a>.</p>
            <p>You can view the repository <a href="https://github.com/mclausaudio/guess-the-flag">here</a>.</p>
          </footer>
        </div>
        )
  }
}
// {isPlaying ? <GuessForm flags={flags} onSubmit={this.handleSubmit}/> : <p>Not Playing</p>}
// <AnswerDisplay isCorrect={isCorrect} answer={answer} onReset={this.handleReset}/>

export default App;
