import React from 'react'

class Timer extends React.Component {
  render () {
    return (
      <div>
        <h2>Timer:</h2>
        <h2>00:{this.props.time}</h2>
      </div>
    )
  }
}

export default Timer
