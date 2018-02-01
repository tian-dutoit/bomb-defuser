import React from 'react'
import Landing from './Landing'
import Circle from './Circle'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cx: props.width / 3,
      cy: props.height / 3,
      r: 60,
      score: 0,
      time: 15,
      showInstructions: true
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame () {
    this.setState({
      showInstructions: false
    })
  }

  render () {
    return (
      <div>
        <Circle cx={this.state.cx} cy={this.state.cy}/>
        {/* <Timer />
    <Counter /> */}
        <Landing start={this.startGame}/>
      </div>
    )
  }
}

export default App
