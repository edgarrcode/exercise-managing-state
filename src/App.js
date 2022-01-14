import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import Present from './Present';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      correctAnswer: 0,
      numQuestions: 0
    };
  }
  
  handleAnswer = answerWasCorrect => {
    if(answerWasCorrect) {
        this.setState( currState =>({
            correctAnswer: currState.correctAnswer + 1,
        }));
    }
    this.setState(currState => ({
        numQuestions: currState.numQuestions + 1,
    }));
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Test handleAnswer={this.handleAnswer} />
          <Present numCorrect={this.state.correctAnswer} numQuestions={this.state.numQuestions} />
        </div>
      </div>
    );
  }
}

export default App;