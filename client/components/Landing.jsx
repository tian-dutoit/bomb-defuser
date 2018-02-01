import React from 'react'

class Landing extends React.Component {
  constructor () {
    super()
    this.state = {
      hello: null
    }
  }

  render () {
    return (
      <div>
        <h2>How to Play:</h2>
        <h4>Click the bombs as fast as you can before time runs out to defuse the bomb!</h4>
        <button onClick={this.props.start}>START</button>
      </div>
    )
  }
}

export default Landing
