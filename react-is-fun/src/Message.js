import React from 'react'

class Message extends React.Component {
  render(){
    return(
      <div style={this.props.style}>
        <h1>This is Message componet</h1>
        <p> Below element is coming as props in componet </p>
        <div>
          {this.props.title}
        </div>
        <div>
          {this.props.list}
        </div>
      </div>
    )
  }
}

export default Message
