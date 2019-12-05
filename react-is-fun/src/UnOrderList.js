import React from 'react'

class UnOrderList extends React.Component {
  render(){
    return(
      <ul id={this.props.id} class={this.props.class}>
        {this.props.list}
      </ul>
    )
  }
}

export default UnOrderList
