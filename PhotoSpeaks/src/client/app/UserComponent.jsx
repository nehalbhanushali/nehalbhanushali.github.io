import React from 'react';

import UserAppBar from './UserAppBar.jsx';



class User extends React.Component {

constructor(props){
        super(props);
        this.state = {
           data : [
            {user_avatar:"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAATWAAAAJDg2ZWE1NGU5LTcyZjQtNGRiOC1iN2YyLTU0ZTE3Y2EwYjVkYg.jpg",
            user_name:"Nehal Bhanushali"
            }]

        }
       // this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
    }


render(){
var user_header =this.state.data.map(function(user){
return <div><UserAppBar username={user.user_name} useravatar={user.user_avatar} /></div>
});
return(
  <div>{user_header}  
  </div>
);}

  }

  export default User;
