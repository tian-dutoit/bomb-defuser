import React from 'react'
import _ from 'lodash'

import Landing from './Landing'
import Circle from './Circle'
import Counter from './Counter'
import Timer from './Timer'
import Win from './Win'
import Lose from './Lose'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cx: props.width / 3,
      cy: props.height / 3,
      r: 60,
      count: 0,
      time: 15,
      showInstructions: true,
      showWin: false,
      showLose: false,
      timer: null
    }
    this.startGame = this.startGame.bind(this)
    this.handleCircleClick = this.handleCircleClick.bind(this)
    this.randomiseHeight = this.randomiseHeight.bind(this)
    this.randomiseWidth = this.randomiseWidth.bind(this)
    this.randomiseRadius = this.randomiseRadius.bind(this)
    this.checkForWin = this.checkForWin.bind(this)
    this.youWon = this.youWon.bind(this)
    this.youLose = this.youLose.bind(this)
    this.restart = this.restart.bind(this)
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

  youWon () {
    this.setState({
      showWin: true
    })
  }

  youLose () {
    this.setState({
      showLose: true
    })
  }

  checkForWin () {
    if (this.state.count > 14) {
      return this.youWon()
    } else {
      return this.youLose()
    }
  }

  restart () {
    clearInterval(this.state.timer)
    this.setState({
      cx: this.props.width / 3,
      cy: this.props.height / 3,
      r: 60,
      count: 0,
      time: 15,
      showInstructions: true,
      showWin: false,
      showLose: false,
      timer: null
    })
  }

  startGame () {
    const timer = setInterval(() => {
      const currentTime = this.state.time - 1
      this.setState({
        time: currentTime
      })
      if (this.state.time < 0) {
        this.checkForWin()
      }
    }, 1000)
    this.setState({
      showInstructions: false,
      timer: timer
    })
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
      <div className='body'>
        {this.state.showInstructions && <Landing start={this.startGame} />}
        {this.state.showWin && <Win restart={this.restart}/>}
        {this.state.showLose && <Lose restart={this.restart} />}
        <svg className='circle' width={this.props.width} height={this.props.height}>
          <Circle cx={this.state.cx} cy={this.state.cy} r={this.state.r} circleClick= {this.handleCircleClick}/>
        </svg>
        <div className='display'>
          <div className='score'>
            <Counter count={this.state.count}/>
          </div>
          <div className='timer'>
            <Timer time={this.state.time}/>
          </div>

        </div>
      </div>
    )
  }
}

export default App
