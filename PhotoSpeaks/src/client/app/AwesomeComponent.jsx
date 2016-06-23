import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

import LikeButton from './LikeButton.jsx';
import CommentList from './CommentBox.jsx';



class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
   // this.state = {likesCount : 0};

    this.state = {
      liked: false
      
    };


    this.handleClick = this.handleClick.bind(this);
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
 

    //this.onLike = this.onLike.bind(this);
  }

  handleClick() {
    this.setState({liked: !this.state.liked});
  }

  handleEnterKeyPress(event) {
    var code = event.keyCode;
    if(event.keyCode == 13){
     
    this.setState({ commentValue: event.target.value});

   //alert(event.target.value);

    //alert(this.props.comments[0].comment);

    this.props.comments.push({ commentbyname: "Jannice",
    commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", 
    comment:event.target.value});

     event.target.value = "";

   // alert(this.props.comments[2].comment);

   //pushComment(event.target.value);
  }
  }


  /*onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  } */


  render() {

var commentList =this.props.comments.map(function(comment){


return <div>

<CommentList commentbyname={comment.commentbyname} 
commentbyavatar = {comment.commentbyavatar} comment={comment.comment}/>

</div>
});

    return (
      <div>

 <Card>
    <CardHeader
      title={this.props.postbyname}
      avatar={this.props.postbyavatar}
    />
    <CardMedia
      overlay={<CardTitle title={this.props.title} subtitle={this.props.notes}/>}
    >
      <img src={this.props.pic} />
    </CardMedia>
    
    <CardText>
   
  {commentList}
  
    </CardText>
    <CardActions>

      <LikeButton />
      <TextField
      hintText="Add a comment..."
       id="text-field-controlled"
          value={this.state.value}
          onKeyDown={this.handleEnterKeyPress}
    />
   
    </CardActions>
  </Card>

      </div>
    );
  }

}

export default AwesomeComponent;

