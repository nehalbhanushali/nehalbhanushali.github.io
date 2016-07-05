import React from 'react';
//import Gallery from './data.jsx';
import User from './UserComponent.jsx';
import AwesomeComponent from './AwesomeComponent.jsx';

import SearchInput, {createFilter} from 'react-search-input'

class Page extends React.Component {

constructor(props){
        super(props);
        this.state = {
          username : '',
          useravatar:'',
          url:'',
          tag:'',
          key : '',
          searchToggle: false,
         data : [

{ id:1,
  im:"http://vignette1.wikia.nocookie.net/gameofthrones/images/e/e9/Arya_Stark_4.jpg/revision/latest?cb=20140428152515",
  postbyname:"Jon Snow",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Bravos",
  hashTag:"#GOT",
  comments:
    [
    {id:1, commentbyname: "Jaquen Hagar", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"Finally a girl is no one" },
      { id:2,commentbyname: "Arya Stark", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"A girl is Arya Stark of Winterfell" },
     
    ]
},
         {
  id:2,     
  im:"http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
  postbyname:"Phoebe Buffay",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Thing",
  hashTag:"#Photography",
  comments:
    [
      { id:1,commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"sexy !" },
     { id:2,commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"awesome !" },
    ]
},
{
  id:3,
  im:"http://cin.h-cdn.co/assets/15/41/980x490/landscape-1444235843-picmonkey-collage2.jpg",
  postbyname:"Monica Geller",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"success show",
  hashTag:"#Fashion",
  comments:
    [
      { id:1,commentbyname: "Ross Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"sexy !" },
     { id:2,commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"awesome !" },
    ]
}
,

  { id:4,
    im:"http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg",postbyname:"Tim Cook",postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  postbyname:"Chandler Bing",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Thing",
  hashTag:"#Food",
  comments:
    [
      { id:1,commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"Oh my Goddd !" },
     { id:2,commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"ooo !" },
    ]
},
{
  id:5,
  im:"https://metrouk2.files.wordpress.com/2016/06/battle-of-bastards.jpg?w=748&h=466&crop=1",
  postbyname:"Sansa Stark",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Battle of bastards",
  hashTag:"#GOT",
  comments:
    [
      { id:1,commentbyname: "Yigrette", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"You know nothing Jon Snow!" },
     { id:2,commentbyname: "Ramsey Snow", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"See you tomorrow.. Bastard!" },
    ]
},]
       
         

        }
        this.handleUserName = this.handleUserName.bind(this);
this.handlePost = this.handlePost.bind(this);
  this.handleTagSearch = this.handleTagSearch.bind(this);

  
    
    }

    handleTagSearch(tagForSearch,searchToggle){

//alert("you looking for "+tagForSearch+" "+searchToggle);
this.setState({key: tagForSearch , searchToggle : searchToggle});

}

    handlePost(url, tag){
//console.log(" handlepost in merge "+url);
       this.setState({url: url,tag:tag}); 
       const data = this.state.data;
       let uName = this.state.username;
     //  console.log(data.length);
      data.unshift({
  id : data.length+1,      
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

  handleUserName(name) {

    this.setState({username: name}); 
   }




  
render(){



  const KEYS_TO_FILTERS = ['hashTag'];
const filteredPostData = this.state.data.filter(createFilter(this.state.key, KEYS_TO_FILTERS));  
  //console.log(" key>>  "+this.state.key + " on ? "+ this.state.searchToggle);
var username = this.state.username;
//var url = this.props.postURL;
//var tag = this.props.postTag;
var searchFunction = this.handleTagSearch;


var filteredPosts = filteredPostData.map(function(pics){
 // console.log(pics.id);
return <AwesomeComponent key = {pics.id} tagForSearch = {searchFunction} userLoggegIn = {username} pic={pics.im} postbyname = {pics.postbyname} postbyavatar = {pics.postbyavatar} title={pics.ti} notes={pics.hashTag} comments = {pics.comments}/>
});


 //console.log("final "+this.state.url);
return (<div>
   <User username={this.handleUserName} post = {this.handlePost}/>
 {filteredPosts} 
  
  
</div>);

}

}


export default Page;