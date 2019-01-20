import React from 'react';
import classes from './SingleComment.css';


//This is a single comment that is showed from "database"
const singlecomment = (props) => {

  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;



  return (
    <div className={props.style} >
    <p className = {classes.Time}> {today}</p>
    <p className = {classes.Text}> username : {props.name}</p>
    <p> message : {props.comment}</p>
    <img src = {props.image} alt = {props.image}/>
    </div>
  );
};

export default singlecomment;
