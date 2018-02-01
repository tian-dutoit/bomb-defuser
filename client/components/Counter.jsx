import React from 'react'

class Counter extends React.Component {
  constructor () {
    super()
    this.state = {
      hello: null
    }
  }

  render () {
    return (
      <div>
        <h2>Count:</h2>
        <h2>{this.props.count}</h2>
      </div>
    )
  }
}

export default Counter
