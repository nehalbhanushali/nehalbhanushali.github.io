import React from 'react';
import Drawer from 'material-ui/Drawer';
//import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
//import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ImageCamera from 'material-ui/svg-icons/image/camera';
import ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PopCamera from './PopCameraIcon.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});


class UserAppBar extends React.Component {

constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle(){ 
console.log("checl!");
    this.setState({open: !this.state.open}); }

handleClose() {this.setState({open: false}); }

  render() {return(
  
<div>
<AppBar
    title="PhotoSpeaks"
    onLeftIconButtonTouchTap= {this.handleToggle}
  
    iconElementRight={
      <PopCamera />
    }
  />
 <Drawer docked={false} 
       open={this.state.open}
onRequestChange={(open) => this.setState({open})}
       >
          <MenuItem onTouchTap={this.handleClose}><NavigationClose /></MenuItem>
          <MenuItem >{this.props.username}</MenuItem>
        </Drawer>
        </div>
);
}
}


export default UserAppBar;