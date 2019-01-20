import React from 'react';

// Component to show style buttons
const stylechoice = (props) => {

  return (
    <div>
    <div>
    <button
      className={props.style}
      onClick={props.click}> {props.id} </button>
    </div>
    </div>
  )
};



export default stylechoice;
