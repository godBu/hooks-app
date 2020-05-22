import React from 'react';
//import { Component } from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [counter, setCounter] = useState(0);
  const [student, setStudent] = useState('Harry');

  useEffect(() => {
    document.title = `Your counter is at ${counter}.`
  })

  return (
    <div className="App">
      <p>Your counter is at {counter}</p>
      <p>Your name is {student}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
      <button onClick={() => setStudent('Callum, the mime')}>Clickity Clack</button>
    </div>
  );
} 

export default App; 

/*
class App extends Component {
  state = {
    number: 0
  }

  incrementFunction = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrementFunction = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        {<p>{this.state.number}</p>}
        <button onClick={this.incrementFunction}>Increase</button>
        <button onClick={this.decrementFunction}>Decrease</button>
      </div>
    )
  }
}

export default App; */
