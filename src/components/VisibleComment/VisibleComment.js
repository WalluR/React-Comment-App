import React,{PureComponent} from 'react';
import SingleComment from './SingleComment/SingleComment';
import classes from './VisibleComment.css';


// Componenet that will show comments that user had made and submitted
class Visiblecomment extends PureComponent {


  constructor(props) {
        super(props);
        console.log("inside VisibleComment", props);
        this.state = {
        comment:0,
        list : [],
  };

}


// Here we alternate the state and push comments to array. Also asking permission
// to save comment
handleSubmit = () => {
  //eslint-disable-next-line
  if (confirm('Are you sure you want to submit this comment?')) {
        let newlist = this.state.list;
        // this is our "database"
        newlist.push([this.props.data.data1,this.props.data.data2,this.props.style,this.props.image]);
        const oldCount = this.state.comment;
        const newCount = oldCount + 1;
        // setting a new state
        this.setState({
          submit : true,
          comment: newCount,
          list: newlist });
          //Call Comment component
          this.props.clear();
          return;


} else {
  return;

}


}



  render() {

// Mapping state.list comments so each new comment will be rendered diffrendly
    let comment = (
      this.state.list.map((list,index) => {
      return <SingleComment
      name = {list[0]}
      comment = {list[1]}
      style = {list[2]}
      key = {index}
      image = {list[3]} />
    }) );




  return (
    <div id = {this.props.id} >
      <div className = {classes.center}>
    <button onClick={this.handleSubmit} className = {classes.button} > Submit</button>
    </div>
    <hr/>
    <h1 className={classes.header}> Comments ({this.state.comment}) </h1>
    {comment}
    </div>
  );
}
}

export default Visiblecomment;
