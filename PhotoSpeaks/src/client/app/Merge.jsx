import React from 'react';
import Gallery from './data.jsx';
import User from './UserComponent.jsx';

class Page extends React.Component {

constructor(props){
        super(props);
        this.state = {
          username : '',
          useravatar:''
         

        }
        this.handleUserName = this.handleUserName.bind(this);
        
    }

  handleUserName(name) {

    this.setState({username: name}); 
   
  }

render(){
 //console.log("final "+this.state.username);
return (<div>
   <User username={this.handleUserName}/>
 
  
    <Gallery username={this.state.username}/>
   

</div>);

}

}


export default Page;