import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import Title from './Title'
import List from './List'
import UnOrderList from './UnOrderList'

var style = {
  backgroundColor : 'orange',
  color: 'white',
  fontFamily: 'Arial'
}
const title = <Title id = "title" class="header" message="I am Title Component"/>

const list1 = <List message="I am List 1" />

const unOrderList = <UnOrderList id="unOrderList" class="unOrderList" list={list1} />

ReactDOM.render(
  <Message title={title} list={unOrderList} style={style}/>,
  document.getElementById('root')
)
