import React from 'react'
import Filled from './Images/Troll Face.png'
import Empty from './Images/memeimg.png'
export default function Star(props) {
    // console.log(props.url);
    let urlImg = props.isFilled ? Filled : Empty
  return (
    <div>
        <img src= {urlImg} onClick = {props.handleClick} ></img>
    </div>
  )
}
