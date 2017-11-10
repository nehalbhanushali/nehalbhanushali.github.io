/**
 * 
 */

 
$(document).ready(function () {
	
});

function checkifAvailable(value){
	
	//alert("check av "+value);
	var user ={};
	
	user.emailID = value;
	
	
	
	var flag = false;
	$.ajax({
		type:"POST",
		url:"checkIfEmailIDExists",
		contentType: 'application/json',

		data:JSON.stringify(user),		
		async :false,
		success:function(data,status){
	    
			  
			
			if(data.trim() == "N"){
				//alert("Success : "+ data);
			flag = true;	
		
			}else{
				//alert("Success : "+ data);
			}
		},
		error:function(jqXHR){
			
			alert("Error : "+jqXHR.status);
			
		}
	});
	return flag;
}



function register(){
	
//	alert("here");
	
	var firstName = $('#firstName').val();
	var lastName = $('#lastName').val();
	
	var emailID = $('#emailID').val();
	var password = $('#passwordSignUp').val();
	
	var gender = $("input[name=gender]:checked").val()
	
	var register = {};
	
	register.firstName =firstName;
	register.lastName = lastName;
	register.emailID = emailID;
	register.password = password;
	register.gender = gender;
	register.userType = "Standard";
	
	var registerData = JSON.stringify(register);
	
	//alert(registerData);


	$.ajax({
		type:"POST",
		dataType : "text",
		url:"registerUser",
		data:registerData,
		async:false,
		contentType : "application/json",
		success:function(data,status){
			//alert(data);
		
			  var str = data;
			  var dataArray =  str.split(" ")
			 var resultType = dataArray[0];
		var message = dataArray[1];
			console.log(resultType);
			if(resultType.trim() == "Success"){
				
			alert("Hi "+message+". You have been successfully registered");
				$('#myModal').modal('hide');	
				
			}else{
				alert(message +"\n Try Registering Again");
			}
		},
		error:function(jqXHR){
			alert("OH, No! "+jqXHR.status);
		}
	});
	
}


function login(){

	
	var loginDetails = {};
	
	loginDetails.emailID = $('#emailSignIn').val();
	loginDetails.password = $('#password').val();
	
	

	$.ajax({
		type:"POST",
//		dataType :'json',
		url:"loginUser",
		data:JSON.stringify(loginDetails),
		contentType : "application/json",
		async: false,
		success:function(data){
//			alert("Success :  "+data );
			var loginDetails = JSON.parse(data);
//			if(JSON.stringify(data).length > 2){
			if(loginDetails.isError =="N"){
				//alert("user logged in")
				localStorage.setItem("UserDetails",data);
//				localStorage.setItem("UserDetails",JSON.stringify(data));
				window.location.href ="#profile";// to do ### think about this
				localStorage.setItem("isloggedIn", "true");
				loginSuccess();
				getMyPosts();
				getNotifications();
			}else{
				
				alert(loginDetails.errorMessage);
			//	localStorage.setItem("isloggedIn", "false");
			}

		},
		error:function(jqXHR){
			
			alert("Error : "+jqXHR.status);
			
		
		}
	});
	
	
	
}


function  uploadProfileImageToServer(imagePath){

	var userDetails = localStorage.getItem("UserDetails");
	
	
	var profile = JSON.parse(userDetails);

	profile.photoPath = imagePath;
	
  //  alert("updating .. "+JSON.stringify(profile));
    
	$.ajax({
		type:"POST",
		dataType :'text',
		url:"updateProfilePicture",
		data:JSON.stringify(profile),
		contentType : "application/json",
		success:function(data){
//			alert("Success :  "+data);
			
			var result = JSON.parse(data);
			
			if(result.isError == "N"){
				localStorage.setItem("UserDetails",JSON.stringify(profile));
				
				var profileImg = "<img src = '"+result.photoPath+"' class= 'img-thumbnail' alt='profile-pic'/>";
				$("#my-profile-photo").html(profileImg);	
				
				
				
			}else{
				
				alert("Error updating profile picture. Image too large")
			}
			
			
			
			

		},
		error:function(jqXHR){
			
			alert("Error : "+jqXHR.status);
		}
	});
   

}


function  createPost(){
var userDetails = localStorage.getItem("UserDetails");
	
	//alert(userDetails);
	//console.log(userDetails);
	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	

	
	var post = {};
	
	
	post.postText =$("#postText").val();
	post.postPhoto = $("#photo_byte_code").val();
	post.postCreaterEmailID = emailID;
	
//	alert(JSON.stringify(post));
	
	
	
	$.ajax({
		type:"POST",
		dataType : "text",
		url:"createPost",
		data:JSON.stringify(post),
//		async:false,
		contentType : "application/json",
		success:function(data){
//			alert(data);
//			alert("aleady stringified "+data);
			var result = JSON.parse(data);
			
			if(result.isError == "N"){
				alert("Post created successfully");
				getMyPosts();	
				
			}else{
				alert("Sorry. Could not create post Image too large");
				
			}
			

		},
		error:function(jqXHR){
			alert("Sorry couldnt create post "+jqXHR.status);
		}
	});	
	
}

function getAllTravellers(){
	
	
var userDetails = localStorage.getItem("UserDetails");

	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	var user = {};
	
	user.emailID = emailID;
	
	
	
	$.ajax({
		type:"POST",
		dataType :'json',
		url:"getAllTravellers",
		data:JSON.stringify(user),
		contentType : "application/json",
//		async: false,
		success:function(data){
		//	alert("Success :  "+data.length);
			console.log(JSON.stringify(data));
			
			
			localStorage.setItem("AllTravellers",JSON.stringify(data));
			
			showAllTravellers();
			

		},
		error:function(jqXHR){
			
			alert("Error geting travellers : "+jqXHR.status);
		}
	});
	
	
}

function getTravelBuddies(){
	
	
	var userDetails = localStorage.getItem("UserDetails");

		var userDetails = JSON.parse(userDetails);
		
		var emailID = userDetails.emailID;
		var user = {};
		
		user.emailID = emailID;
		
		
		
		$.ajax({
			type:"POST",
			dataType :'json',
			url:"getTravelBuddies",
			data:JSON.stringify(user),
			contentType : "application/json",
//			async: false,
			success:function(data){
			//	alert("Success :  "+data.length);
				console.log(JSON.stringify(data));
				
				
				localStorage.setItem("AllTravelBuddies",JSON.stringify(data));
				
				showAllTravelBuddies();
				

			},
			error:function(jqXHR){
				
				alert("Error geting travellers : "+jqXHR.status);
			}
		});
		
		
	}


function createGroup(){
	
	var userDetails = localStorage.getItem("UserDetails");
	
	//alert(userDetails);
	//console.log(userDetails);
	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	

	
	var group = {};
	
	
	group.groupName =$("#groupName").val();
	group.groupDescription = $("#groupDescription").val();
	group.groupPhotoPath = $("#group-photo-hidden").val();
	group.groupAdminEmailID = emailID;
	
//	alert($("#group-photo-hidden").val());
	
	
	
	$.ajax({
		type:"POST",
		dataType : "text",
		url:"createGroup",
		data:JSON.stringify(group),
//		async:false,
		contentType : "application/json",
		success:function(data){
		//	alert(JSON.stringify(data));
//			alert("aleady stringified "+data);
var result = JSON.parse(data);
			if(result.isError == "N"){
				
			alert("Success creating group");
				$('#myGroupCreateModal').modal('hide');	
				goBackOrRefresh();
				
			}else{
				alert("Sorry. Could not create group. Image too large ");
			}
		},
		error:function(jqXHR){
			alert("OH, No! couldnt create group "+jqXHR.status);
		}
	});
	
}


function addInterest(){
	var userDetails = localStorage.getItem("UserDetails");
	
	//alert(userDetails);
	//console.log(userDetails);
	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	
	var interest = {};
	
	interest.createdBy  = emailID;
	interest.interestName = $("#my_travel_interests").val();
	
	$.ajax({
		type:"POST",
		dataType : "json",
		url:"addInterest",
		data:JSON.stringify(interest),
//		async:false,
		contentType : "application/json",
		success:function(data){
//			alert(JSON.stringify(data));
			
			goBackOrRefresh();

		},
		error:function(jqXHR){
			alert("OH, No! couldnt create interest "+jqXHR.status);
		}
	});
	
}

function getAllInterests(){
	
var userDetails = localStorage.getItem("UserDetails");

var userDetails = JSON.parse(userDetails);

var emailID = userDetails.emailID;

var user = {};

user.emailID = emailID;
user.errorMessage = "";

	$.ajax({
		type:"POST",
		dataType : "json",
		url:"getAllInterests",
		data:JSON.stringify(user),
//		async:false,
		contentType : "application/json",
	    success: function (data) {
//	        alert(JSON.stringify(data));
	    	localStorage.setItem("AllInterests",JSON.stringify(data));
	    	
	    	setAllInterests();
	    	
	    },
		error:function(jqXHR){
			alert("OH, No! couldnt fetch interest "+jqXHR.status);
		}
	});
}

function getAllInterestsAuto(key){
	
	var userDetails = localStorage.getItem("UserDetails");

	var userDetails = JSON.parse(userDetails);

	var emailID = userDetails.emailID;

	var user = {};

	user.emailID = emailID;
	user.errorMessage = key;
		

		$.ajax({
			type:"POST",
			dataType : "json",
			url:"getAllInterests",
			data:JSON.stringify(user),
//			async:false,
			contentType : "application/json",
		    success: function (data) {
//		        alert(JSON.stringify(data));
		    	localStorage.setItem("AllInterests",JSON.stringify(data));
		    	
		    	setAllInterests();
		    	
		    },
			error:function(jqXHR){
				alert("OH, No! couldnt fetch interest "+jqXHR.status);
			}
		});
	}


//var cityDiv = $(cityName).parent().find('.populateCityDiv>ul');
//
//
//var serverData = xmlHttp.responseText;
//$(cityDiv).html(serverData);
//
//
//if(cityName.id =="my-cityName" && serverData.trim().length !=0){
//	$(cityDiv).css('display','block');	
//	
//}
//$(cityDiv).find('li>a').click(function(){
//	
//	
//	var selectedValue = $(this).html();
//	$(cityName).val(selectedValue);
//	$(cityDiv).html('');
//	$(cityDiv).css('display','none');	
//}) ; 

function getAllGroups(){

var userDetails = localStorage.getItem("UserDetails");

	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
//	alert("emailID "+emailID);
	
	var user = {};
	
	user.emailID = emailID;
	
	$.ajax({
		type:"POST",
		dataType : "json",
		url:"getAllGroups",
		data:JSON.stringify(user),
		async:false,
		contentType : "application/json",
		success:function(data,status){
//			console.log(" >>> all the groups "+JSON.stringify(data));
			
localStorage.setItem("AllGroups",JSON.stringify(data));
			
			showAllGroups();
			
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt get groups "+jqXHR.status);
		}
	});
}

function joinGroup(groupID){
	
	var userDetails = localStorage.getItem("UserDetails");

	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;

	var group = {};
	
	group.groupID = Number(groupID);
	
	group.groupAdminEmailID = emailID; // may not be creater, just using a transient string to send criteria
	$.ajax({
		type:"POST",
		dataType : "json",
		url:"joinGroup",
		data:JSON.stringify(group),
		contentType : "application/json",
		success:function(data,status){
//			console.log(" >>> all the groups "+JSON.stringify(data));
			
			alert(JSON.stringify(data))
			
			if(data.isError == "N"){
			goBackOrRefresh();	
				
			}
			
			else{
				alert("Error joining group. "+result.errorMessage);
			}
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt join groups "+jqXHR.status);
		}
	});
	
}


function leaveGroup(groupID){
	
	alert("leaving group "+groupID);
	
	var userDetails = localStorage.getItem("UserDetails");

	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;

	var group = {};
	
	group.groupID = Number(groupID);
	
	group.groupAdminEmailID = emailID; // may not be creater, just using a transient string to send criteria
	$.ajax({
		type:"POST",
		dataType : "json",
		url:"leaveGroup",
		data:JSON.stringify(group),
		contentType : "application/json",
		success:function(data,status){
//			console.log(" >>> all the groups "+JSON.stringify(data));
			
			alert(JSON.stringify(data))
			
			if(data.isError == "N"){
				
				alert("sdmb");
			goBackOrRefresh();	
				
			}
			
			else{
				alert("Error leaving group")
			}
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt join groups "+jqXHR.status);
		}
	});
	
}

function addORRemoveBuddy(buddyEmailID, action){
	
	alert(buddyEmailID + " "+action);
	
	var userDetails = localStorage.getItem("UserDetails");

	var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	
	var user ={};
	
	user.emailID = emailID;
	
	user.isTravelBuddy = buddyEmailID;
	
	user.errorMessage = action;
	
	$.ajax({
		type:"POST",
		dataType : "json",
		url:"addORRemoveBuddy",
		data:JSON.stringify(user),
		contentType : "application/json",
		success:function(data,status){
//			console.log(" >>> all the groups "+JSON.stringify(data));
			
			alert(JSON.stringify(data))
			
			if(data.isError == "N"){
				
				alert("sdmb");
			goBackOrRefresh();	
				
			}
			
			else{
				alert("Error leaving group")
			}
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt join groups "+jqXHR.status);
		}
	});
	
	
	
	
	
}
function getNotifications(){
	
var userDetails = localStorage.getItem("UserDetails");
	
	//alert(userDetails);
	//console.log(userDetails);
var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	
	var user = {};
	user.emailID = emailID;

	
	$.ajax({
		type:'POST',
//		dataType : 'json',
		url:'getNotifications',
		data:JSON.stringify(user),
		async:false,
		cache: false,
		contentType : 'application/json',
		success:function(data,status){
//			alert("all the notifications "+JSON.stringify(data));
			
          localStorage.setItem("AllNotifications",JSON.stringify(data));
			
			setMyNotifications();
			
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt get posts "+jqXHR.status);
		}
	});
	
	
	
}
function getMyPosts(){
	
	
var userDetails = localStorage.getItem("UserDetails");
	
	//alert(userDetails);
	//console.log(userDetails);
var userDetails = JSON.parse(userDetails);
	
	var emailID = userDetails.emailID;
	
	var user = {};
	user.emailID = emailID;

	
	$.ajax({
		type:'POST',
//		dataType : 'json',
		url:'getMyPosts',
		data:JSON.stringify(user),
		async:false,
		cache: false,
		contentType : 'application/json',
		success:function(data,status){
//			alert("all the posts "+data);
			
          localStorage.setItem("AllPosts",data);
			
			setMyPosts();
			
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt get posts "+jqXHR.status);
		}
	});
	
	
	
}

function  updateCity(){
	
var userDetails = localStorage.getItem("UserDetails");
	
	//alert(userDetails);
	//console.log(userDetails);
var userDetails = JSON.parse(userDetails);
	
//	var emailID = userDetails.emailID;
//	
//	var user = {};
//	user.emailID = emailID;
userDetails.userCity = $("#my_city").val();

	
	$.ajax({
		type:'POST',
//		dataType : 'json',
		url:'updateCity',
		data:JSON.stringify(userDetails),
//		async:false,
//		cache: false,
		contentType : 'application/json',
		success:function(data){
			
var result = JSON.parse(data);
			
			if(result.isError == "N"){
				
				alert("Location updated successfully")
				localStorage.setItem("UserDetails",JSON.stringify(userDetails));
				
				$("#my_city").html(result.userCity);	
				
				
				
			}else{
				
				alert("Error updating city");
			}
			
		
		},
		error:function(jqXHR){
			alert("OH, No! couldnt get posts "+jqXHR.status);
		}
	});
}

function getPlacesToBe(lat,long){
	$.support.cors = "true";
	$.ajax({
		url:"https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+long +
				"&radius=500&types=food" +
				"&name=cruise&" +
				"key=AIzaSyCGGnSirW6ClO7V1BMQPHnnAgghxrAUhcc",
		
		type:"GET",
		dataType:"json",
	//	url:"https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBxdOv7sNA6aD6NeVFxLCuONNUKpvT3DGE",
		
		success:function(data){
		//	alert(JSON.stringify(response));
		
		},
		error:function(){
			alert("OH, No!");
		}
	});
	
	
	
}
function getCurrentAddress(lat, long){
	
	//alert("bmsdbsn");
	
	console.log("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+
			"&key=AIzaSyBtI7AN64cEY4OHkRyaPJd_RwiuDe_pA-o");

	$.ajax({
		
	//	url:"http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&sensor=true",
		url:"https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long
		+	"&key=AIzaSyBtI7AN64cEY4OHkRyaPJd_RwiuDe_pA-o",
		
		type:"GET",
		dataType:"json",
	//	url:"https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBxdOv7sNA6aD6NeVFxLCuONNUKpvT3DGE",
		
		success:function(data){
		//	alert(JSON.stringify(data));
		//	alert(data.results[1].formatted_address);

/*var city = data.results[0].address_components[3].long_name;
var state =data.results[0].address_components[5].short_name;*/
var array = data.results[1].formatted_address;
var cityState = array.split(",");

$('#loc').val(cityState[1]+", "+cityState[2]);
//$('#my_city').val(cityState[1]+", "+cityState[2]);
		},
		error:function(){
			alert("OH, No!");
		}
	});
	
//	http://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&sensor=true
}