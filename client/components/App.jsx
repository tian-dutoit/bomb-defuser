import React from 'react'

class App extends React.Compnent {
  constructor(props) {
    super(props)
    this.state = {
      cx: props.width / 3,
      cy: props.height / 3,
      r: 60,
      score: 0,
      time: 15,
      showInstructions: "true"
    }

  }

  render () {
    return (
      <Circle cx={this.state.cx} cy={this.state.cy}/>
      //<Timer />
      //<Counter />
      //<Landing />
    )
  }

}

export default App

