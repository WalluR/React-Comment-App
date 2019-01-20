import React from "react";
import classes from './Value.css';

// This is a Form Component that contains inputs for comment and username and emoji
const values=(props) =>  {

  return  (
    <div>
    <form>
      <div>
     <label className={classes.Label}>name </label>
     <input
      className={classes.Input}
      type="text"
      value={props.valueIn}
      onChange={props.changeIn} />
     </div>
     <div>
     <label className={classes.Label}> Comment </label>
     <textarea className={classes.Input}
      rows="5" cols="33"
      value = {props.valueAre}
      onChange={props.changeAr}/>
    <label className={classes.Label}> Emoji </label>
    <img src = {props.image} alt = {props.image}/>
     </div>
     </form>
     </div>

)
};

export default values;
