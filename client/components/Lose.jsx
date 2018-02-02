import React from 'react'

class Lose extends React.Component {
  render () {
    return (
      <div className='lose'>
        <h2>You Failed!</h2>
        <h2>You killed everyone :(</h2>
        <img src = "../../images/explotion.gif" className="loseImage"/>
        <button onClick={this.props.restart}>ReTry</button>
      </div>
    )
  }
}

export default Lose
