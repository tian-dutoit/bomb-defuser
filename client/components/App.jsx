import React from 'react'
import Landing from './Landing'
import Circle from './Circle'
import Counter from './Counter'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cx: props.width / 3,
      cy: props.height / 3,
      r: 60,
      count: 0,
      time: 15,
      showInstructions: true
    }
    this.startGame = this.startGame.bind(this)
    // this.handleCircleClick = this.handleCircleClick.bind(this)
  }

  // handleCircleClick() {
  //   const currentScore = this.state.count + 1
  //   this.setState()
  //   count: currentScore
  // }

  startGame () {
    this.setState({
      showInstructions: false
    })
  }

  render () {
    return (
      <div>
        <div>
          {this.state.showInstructions && <Landing start={this.startGame} />}
        </div>
        <div>
          <Circle cx={this.state.cx} cy={this.state.cy}/>
        </div>
        <div>
          {/* <Timer /> */}
          <Counter count={this.state.count}/>
        </div>
      </div>
    )
  }
}

export default App
