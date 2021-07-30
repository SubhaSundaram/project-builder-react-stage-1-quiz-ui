import React from 'react'
class QuizComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="quiz">
        <div classsName="quizbody">
          <div id="ques">
            <h1>Question</h1>
            <p>Which is the only mammal that can't jump ?</p>
            <div id="arrange">
              <button id="ans">Dog</button>
              <button id="ans">Goat</button>
              <button id="ans">Elephant</button>
              <button id="ans">Lion</button>
            </div>
            <div id="nav">
              <button id="prev">Previous</button>
              <button id="next">Next</button>
              <button id="quit">Quit</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default QuizComponent
