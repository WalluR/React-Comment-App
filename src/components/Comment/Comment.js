import React, { Component } from 'react';
import classes from './Comment.css';
import Values from '../Value/Values';
import StyleChoice from '../StyleChoice/StyleChoice';
import VisibleComment from '../VisibleComment/VisibleComment';
import ImageContainer from '../ImageContainer/ImageContainer';
import logo1 from '../../Images/angry.png';
import logo2 from '../../Images/happy.png';
import logo3 from '../../Images/love.png';

class Comment extends Component {

// Storing the orginal state.
  componentWillMount() {
    this.initialState = this.state
}

// this shouldComponentUpdate method is used to decide if our comment needs rendering.
// by using multiple OR statements we are comparing our virtual Dom's state to future state.
shouldComponentUpdate(nextProps, nextState) {
  console.log("Should Component");
  return nextState.style !== this.state.style || nextState.image !== this.state.image ||
  nextState.inValue !== this.state.inValue || nextState.areaValue !== this.state.areaValue;
}
  state = {
    style: classes.Style1,
    inValue: '',
    areaValue:'',
    image:null,
  }

// Listening click method in StyleChange Component. Update style when click is made
  changeStyleHandeler = (index) => {
    console.log(index);
    this.changeStyle(index);
  };

//handler for input for username
  handleChangeInput(event) {
    this.setState({inValue: event.target.value});
  }

//handler for textfield which contains actual comment
  handleChangeiArea(event) {
    this.setState({areaValue: event.target.value});
  }


// Setting state to initialState so inputs will clear
  ClearInputs = () => {
    console.log("clear All");
    this.setState(this.initialState);
}

//saving selected image to state
selectImage =(index) => {
  let img = index;
  this.setState({image:img}, () => console.log(this.state));
}




// Switch case to determine which is the new state and new style for the component
// by default style = classes.Style1 value = clicked style
  changeStyle = (value) => {
      switch (value) {
        case 0:
            this.setState({style : classes.Style2})
            break;
        case 1:
            this.setState({style : classes.Style3})
            break;
        default:
        console.log("No style");
      }
    }

  render() {

// Setting StylesChoices with map. function
    const name = ["style 1","style 2"];
    let style = name.map((name, index) => {
    return <StyleChoice
      id={name}
      key = {index}
      style = {classes.button}
      click={() => this.changeStyleHandeler(index)} />;
  })


    return (
      <div>
      <div className = {this.state.style}>
      <Values
        valueIn={this.state.inValue}
        valueAre={this.state.areaValue}
        changeIn={(event) => this.handleChangeInput(event)}
        changeAr={(event) => this.handleChangeiArea(event)}
        image = {this.state.image}/>
      </div>
      <div className ={classes.Div}>
        <div className = {classes.Div2}>
        <h3 className = {classes.h3}>Select your style</h3>
      {style}
      </div>
      <div className={classes.Image}>
        <h3 className = {classes.h3}>Select emoji</h3>
          <ImageContainer image={logo1} className = {classes.button}
             click ={() => this.selectImage(logo1)}/>
           <ImageContainer image={logo2}
            click ={() => this.selectImage(logo2)}/>
            <ImageContainer image={logo3}
              click ={() => this.selectImage(logo3)}/>
            </div>
          </div>
        <VisibleComment
          id="comment"
          data = {{data1:this.state.inValue, data2:this.state.areaValue}}
          style = {this.state.style}
          clear = {this.ClearInputs.bind(this)}
          image = {this.state.image}/>
    </div>
    );
  }
}

export default Comment;
