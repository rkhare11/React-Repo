import React from 'react'

class Title extends React.Component {
  render(){
    return(
      <h1 id={this.props.id} class={this.props.class}>
        {this.props.message}
      </h1>
    )
  }
}

export default Title
