

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

const style = {
  marginRight: 20,
};
//injectTapEventPlugin();

 class PopCamera extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      postDialogOpen :false,
      url:"",
      tag:"",
       
    };

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);


    this.handlePostDialogOpen = this.handlePostDialogOpen.bind(this);
    this.handlePostDialogClose = this.handlePostDialogClose.bind(this);
    this.handleCloseAndPost = this.handleCloseAndPost.bind(this);
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
  }


  handlePostDialogOpen(){ 

    this.setState({postDialogOpen: true}); }

  handlePostDialogClose(){ this.setState({postDialogOpen: false}); }

  handleCloseAndPost(event){ 
    this.setState({
      postDialogOpen: false,
       
    }); 
 var url = this.state.url;
 var tag = this.state.tag;

   this.props.post(url, tag); 


  }
  handleURLChange(event){
    this.setState({url: event.target.value});
  }
   handleTagChange(event){
    this.setState({tag: event.target.value});
  }

  handleTouchTap(event){
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  render() {

     const actions = [
      <FlatButton
        label="Post"
        primary={true}
        onTouchTap={this.handleCloseAndPost}

      />,
      
    ];
    return (
      <div>
    
     <FloatingActionButton onTouchTap={this.handlePostDialogOpen} mini={true} secondary={true} style={style}>
      <ContentAdd />
    </FloatingActionButton>
       <Dialog
          title="Create a post"
          actions={actions}
          modal={false}
          open={this.state.postDialogOpen}
          onRequestClose={this.handlePostDialogClose}
        >
           <div>
    <TextField
      hintText="Enter photo url"
      onChange = {this.handleURLChange}
      value={this.state.url}
      floatingLabelText="URL"
    /><br />
    <br />
    <TextField
      hintText="Enter one word description"
      onChange = {this.handleTagChange}
      value={this.state.tag}
      floatingLabelText="Description"
     
    /><br /></div>
        </Dialog>
        
      </div>
    );
  }
}

export default PopCamera;

/*<Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem><IconButton><ImagePhotoLibrary /></IconButton></MenuItem>
            <MenuItem ><IconButton> <ImageCamera /></IconButton></MenuItem>
          
          </Menu>
        </Popover>*/