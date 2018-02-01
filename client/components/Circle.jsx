import React from 'react'

class Circle extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <circle cx={this.props.cx} cy={this.props.cy} r={this.props.r} onClick = {this.props.circleClick}/>
    )
  }
}

export default Circle
