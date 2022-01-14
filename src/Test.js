import React, { Component } from 'react';

class Test extends Component {
  constructor(props){
    super(props);
    const sumValues = this.makeAnArray();
    this.state = {
      value1: sumValues[0],
      value2: sumValues[1],
      value3: sumValues[2],
      proposedAnswer: sumValues[3]
    }
  }

  makeAnArray = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = newValuesArray => {
    this.setState(currentState => ({
      value1: newValuesArray[0],
      value2: newValuesArray[1],
      value3: newValuesArray[2],
      proposedAnswer: newValuesArray[3]
    }));
    };

    handleAnswer = event => {
      const newValuesArray = this.makeAnArray();
      this.updateState(newValuesArray);
      const answerWasCorrect = this.testAnswer(event.target.name);
      this.props.handleAnswer(answerWasCorrect);
    };

    testAnswer(userAnswer) {
      const{value1, value2, value3, proposedAnswer} = this.state;
      const realAnswer = value1 + value2 + value3;
      
      return(
        (realAnswer === proposedAnswer && userAnswer === 'true') ||
        (realAnswer !== proposedAnswer && userAnswer === 'false')
      );
    }

    render () {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button
          onClick={this.handleAnswer}
          name="true"
          >
          True</button>
          <button
          onClick={this.handleAnswer}
          name="false"
          >False</button>
      </div>
    );
  }
}

export default Test;