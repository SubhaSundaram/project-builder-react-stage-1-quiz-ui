import React from 'react'
import './HomeComponent.css'
class HomeComponent extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <div className="home">
        <h1>Quiz App</h1>
        <button id="play">Play</button>
      </div>
    )
  }
}
export default HomeComponent
