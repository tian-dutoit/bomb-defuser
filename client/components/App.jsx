import React from 'react'
import Landing from './Landing'

const App = () => {

  startGame() {
    this.setState ({
      this.showInstructions = false
    })
  }
  
  return (
    <div>
      <h1>Bomb Defuser</h1>
      <Landing/>
    </div>
  )
}

export default App
