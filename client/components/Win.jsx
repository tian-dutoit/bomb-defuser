import React from 'react'

class Win extends React.Component {
  render () {
    return (
      <div className='win'>
        <h2>Nice One!</h2>
        <h2>You Defused the Bomb!</h2>
        <img src = "../../images/Win.gif" className="winImage"/>
        <button onClick={this.props.restart}>ReTry</button>
      </div>
    )
  }
}

export default Win
