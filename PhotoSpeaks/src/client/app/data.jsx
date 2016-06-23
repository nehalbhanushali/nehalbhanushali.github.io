import React from 'react';
import AwesomeComponent from './AwesomeComponent.jsx';







class Gallery extends React.Component {

constructor(props){
        super(props);
        this.state = {
         data : [{
  im:"http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",
  postbyname:"Phoebe Buffay",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Thing",
  ca:"Gear",
  comments:
    [
      { commentbyname: "Monica Geller", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"sexy !" },
     { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"awesome !" },
    ]
},

  {im:"http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg",postbyname:"Tim Cook",postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  postbyname:"Chandler Bing",
  postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
  ti:"Thing",
  ca:"Gear",
  comments:
    [
      { commentbyname: "Jannice", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"Oh my Goddd !" },
     { commentbyname: "Rachel Green", commentbyavatar: "http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg", comment:"ooo !" },
    ]
}]



           /*data : [
            {im:"http://jamidavisphotography.com/wp-content/uploads/2016/02/St.-Petersburg-Photography-2.jpg",postbyname:"Tim Cook",postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",ti:"Thing",ca:"Gear"},  
            {im:"http://exploregram.com/wp-content/uploads/2015/02/Happy-Valentines-Day-everyone-Breakfast-were-waffles-with-lots-of-red-toppings-strawbs-bluebs-pomegr.jpg",postbyname:"Tim Cook",postbyavatar:"https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",ti:"dsfdsfdg",ca:"dsfds"},
            ]*/

        }
       // this.handleUnshiftArray = this.handleUnshiftArray.bind(this);
    }


render(){
var abat =this.state.data.map(function(pics){
return <div><AwesomeComponent pic={pics.im} postbyname = {pics.postbyname} postbyavatar = {pics.postbyavatar} title={pics.ti} notes={pics.ca} comments = {pics.comments}/></div>
});


return(
  <div>{abat}  
  </div>
);}



  }

  export default Gallery;






