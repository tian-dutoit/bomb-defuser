import React from 'react'
import _ from 'lodash'

import Landing from './Landing'
import Circle from './Circle'
import Counter from './Counter'
import Timer from './Timer'

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
    this.handleCircleClick = this.handleCircleClick.bind(this)
    this.randomiseHeight = this.randomiseHeight.bind(this)
    this.randomiseWidth = this.randomiseWidth.bind(this)
    this.randomiseRadius = this.randomiseRadius.bind(this)
  }

  randomiseWidth () {
    return _.random(100, this.props.width - 100)
  }

  randomiseHeight () {
    return _.random(100, this.props.height - 100)
  }

  randomiseRadius () {
    return _.random(20, 100)
  }

  startGame () {
    this.setState({
      showInstructions: false
    })
    setInterval(() => {
      const currentTime = this.state.time - 1
      this.setState({
        time: currentTime
      })
      if (this.state.time === 0) {
        alert('Oh No!')
      }
    }, 1000)
  }

  handleCircleClick () {
    const currentScore = this.state.count + 1
    const random = this.randomiseRadius()
    this.setState({
      cx: this.randomiseWidth(),
      cy: this.randomiseHeight(),
      r: random,
      count: currentScore
    })
  }

  render () {
    return (
      <div>
        <svg width={this.props.width} height={this.props.height}>
          <Circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} circleClick= {this.handleCircleClick}/>
        </svg>
        <div>
          {this.state.showInstructions && <Landing start={this.startGame} />}
        </div>
        <div className='display'>
          <Timer time={this.state.time}/>
          <Counter count={this.state.count}/>
        </div>
      </div>
    )
  }
}

export default App
