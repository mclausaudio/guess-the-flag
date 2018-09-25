import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      countries: [],
      flags: []
    }
  }
  
  componentDidMount(){
    const allCountries = 'https://restcountries.eu/rest/v2/all'
    
    fetch(allCountries)
    .then(countries => countries.json())
    .then(countries => this.setState({countries}))
  }
  
  render() {
    let views = <div>Loading...</div>
    const {countries} = this.state;
    
    if(countries.length > 0) {
      views = countries.map(c => (
        <div>
          <p>{c.name}</p>
          <img src={c.flag}  alt={c.name}/>
        </div>
      ))  
    }

    return (
      <div className="App">
        <h1>Guess The Flag</h1>
        {views}
      </div>
    );
  }
}

export default App;
