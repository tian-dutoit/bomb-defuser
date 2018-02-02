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
      <div className='landing'>
        <h2>How to Play:</h2>
        <h4>Click the bombs as fast as you can before time runs out to defuse the bomb!</h4>
        {/* <h4></h4>  */}
        <button className='start' onClick={this.props.start}>START</button>
      </div>
    )
  }
}

export default Landing
