import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';


class MainComponent extends React.Component {

constructor(props){
        super(props);
         var userDataObj = JSON.parse(localStorage.getItem('userData'));
        var userName = userDataObj.name;
        this.state = {
         
         userData : localStorage.getItem('userData'),
         userName : userName,
         userNameTry : JSON.parse(localStorage.getItem('userData')).name

        }


       

       this.responseFacebook = this.responseFacebook.bind(this);

    }


responseFacebook(response){


}

 
render(){


return (<div>
<Toolbar>
        <ToolbarGroup firstChild={true}>

         <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationMenu />
              </IconButton>
            }
          />
         <ToolbarTitle text={this.state.userNameTry} />

        </ToolbarGroup>
        <ToolbarGroup>
        
          <ToolbarSeparator />
         
           <ToolbarTitle text={this.state.userData}/>
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>

  <Col xs={12} sm ={10} smOffset = {1} md={8} mdOffset={2} lg = {6} lgOffset={3}>
  
<Card>

 <CardHeader
      title="TheCookBot"
      subtitle="Recipe by ingredients and more.."
      avatar="http://lorempixel.com/100/100/food/"
    />
 <CardActions>
 

  
   </CardActions> 
    <CardText>
    <div id="status"></div>
    </CardText>
}
</Card>

</Col></div>);
}

}


export default MainComponent;