import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';

class Page extends React.Component {

constructor(props){
        super(props);
        this.state = {
         
         userData : []

        }
       this.responseFacebook = this.responseFacebook.bind(this);

    }


responseFacebook(response){

   //console.log(JSON.stringify(response) + " "+response.status);

   var stringResponse = JSON.stringify(response);
   localStorage.setItem("userData", stringResponse);


console.log("from local st "+localStorage.getItem("userData")
  if (response.name.length >0) {
    // Logged into your app and Facebook.
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';

    this.setState({userData: response});

   


    //this.props.userLoginInfo(response);
  } else if (response.status === 'not_authorized') {
    // The person is logged into Facebook, but not your app.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  } else {
    // The person is not logged into Facebook, so we're not sure if
    // they are logged into this app or not.
    document.getElementById('status').innerHTML = 'Please log ' +
    'into Facebook.';
  }

}

 
render(){

  var appContent =  <FacebookLogin
    appId="1229974300360018"
    autoLoad={true}
    callback={this.responseFacebook} />;

return (<Col xs={12} sm ={10} smOffset = {1} md={8} mdOffset={2} lg = {6} lgOffset={3}>
  
<Card>

 <CardHeader
      title="TheCookBot"
      subtitle="Recipe by ingredients and more.."
      avatar="http://lorempixel.com/100/100/food/"
    />
 <CardActions>
 
{appContent}
  
   </CardActions> 
    <CardText>
    <div id="status"></div>
    </CardText>
}
</Card>

</Col>);
}

}


export default Page;