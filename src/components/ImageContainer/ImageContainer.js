import React from 'react'

// component to show images
const imagecontainer = (props) => (

  <div onClick = {props.click}>
  <img src = {props.image} alt = {props.image}/>
  </div>


);

export default imagecontainer;
