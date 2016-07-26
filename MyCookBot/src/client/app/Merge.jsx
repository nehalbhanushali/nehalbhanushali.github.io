import React from 'react';



/*import User from './UserComponent.jsx';
import AwesomeComponent from './AwesomeComponent.jsx'; */

//import SearchInput, {createFilter} from 'react-search-input';



class Page extends React.Component {

constructor(props){
        super(props);
        this.state = {
         
         data : []
       
         

        }
      //  this.handlePost = this.handlePost.bind(this);


  
    
    }



    handlePost(url, tag){
//console.log(" handlepost in merge "+url);

var time = new Date();


       this.setState({url: url,tag:tag}); 
       const data = this.state.data;
       let uName = this.state.username;
     //  console.log(data.length);
      data.unshift({
  id : time,      
  im:url,
  postbyname:uName,
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"New Post",
  hashTag:tag,
  comments:
    [
      
    ]
});

this.setState({data});
    }


  
render(){


  /*const KEYS_TO_FILTERS = ['hashTag'];
const filteredPostData = this.state.data.filter(createFilter(this.state.key, KEYS_TO_FILTERS));  
  //console.log(" key>>  "+this.state.key + " on ? "+ this.state.searchToggle);
var username = this.state.username;
//var url = this.props.postURL;
//var tag = this.props.postTag;
//<Time value={wasDate} titleFormat="YYYY/MM/DD HH:mm" relative /> ## todo
var searchFunction = this.handleTagSearch;


var filteredPosts = filteredPostData.map(function(pics){

return <AwesomeComponent key = {pics.id} time = {pics.id} tagForSearch = {searchFunction} userLoggegIn = {username} pic={pics.im} postbyname = {pics.postbyname} postbyavatar = {pics.postbyavatar} title={pics.ti} notes={pics.hashTag} comments = {pics.comments}/>
});
*/
 /* <User username={this.handleUserName} post = {this.handlePost}/>
 {filteredPosts} 
  
  
*/
 //console.log("final "+this.state.url);
return (<div>
 dghd
</div>);
}

}


export default Page;