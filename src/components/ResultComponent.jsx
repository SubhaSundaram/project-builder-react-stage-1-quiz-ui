import React from 'react'
class ResultComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="result">
        <h2>Result</h2>
        <div className="ans">
          <p>You need more practise!</p>
          <h1>Your Score: 20%</h1>
          <div id="res">
            <p>Total number of questions 15</p>
            <p>Number of Attempted questions 9</p>
            <p>Number of Correct answers 3</p>
            <p>Number of Wrong answers 6</p>
          </div>
        </div>
        <button id="button">Play Again</button>
        <button id="button">Back to Home</button>
      </div>
    )
  }
}
export default ResultComponent
