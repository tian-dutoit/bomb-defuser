import React from 'react'

class Circle extends React.Component {
  constructor(props) {
    super(prop)
    // this.state = {

    // }
  }

  render () {
    return (
      <svg>
        <circle cx={this.props.cx} cy={this.props.cy} r={60}/>

      </svg>
      
    )
  }
}