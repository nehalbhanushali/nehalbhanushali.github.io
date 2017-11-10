/**
 * 
 */

$(document).ready(function () {
	getLocation();	
goBackOrRefresh();
	
$(".my-left-menu a").click(function(){
		
		hideUserMenuDivs();
	});	

$("a#my-header-searchIcon-a").click(function(){
	// alert("bsamda");
	 
	  $("input#my-header-searchBox").toggle();
  });
	
$("#userMenu>ul a").click(function(){
		
		var target = $(this).attr('href');
		var div = target.substring(1, target.length );
	
	//	alert(".content div:not('#"+div+"')");
		showMyDiv(div);
		
		   
	});
	
//	alert("hjsdhsa");



$("#post_form").validate({
	  errorElement:'div',

		//specify the validation rules
		rules:{
			postText:"required",
		

		},

		//specify the error messages
		messages:{
			
			
		},
		submitHandler: function(form) {
		   createPost(); // #### e.preventdefault
		    
		  }

	});

  $("#registrationForm").validate({
	  errorElement:'div',

		//specify the validation rules
		rules:{
			firstName:"required",
			lastName:"required",
			password:"required",
			confirmPassword:{
				required:true,
				confirmPasswordCheck:true
			},
			emailID:{
				notExisting:true,
				required:true,
				laxEmail:true
			}

		},

		//specify the error messages
		messages:{
			firstName:{
				required: "Please enter your Full Name",
			},
			lastName:{
				required: "Please enter your Full Name",
			},
			
			password:{
				required: "Please enter a password",
			},
			
			confirmPassword:{
				required:"Please confirm your password",
				
			},
			emailID:{
				required: "Please enter your Email ID",
			},
			
			
			laxEmail:"Please enter an Email ID",
			firstName:"Please enter your Name",
			lastName:"Please enter your Name",
			password:"Please enter a password",
			
		},
		submitHandler: function(form) {
		   register(); // #### e.preventdefault
		    
		  }

	});
  
  jQuery.validator.addMethod("notExisting", function(value, element) {
	  // allow any non-whitespace characters as the host part
	
	  return this.optional( element ) || checkifAvailable(value) ;
	}, 'Account for this Email ID exists.');
  
  jQuery.validator.addMethod("laxEmail", function(value, element) {
	  // allow any non-whitespace characters as the host part
	  return this.optional( element ) || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( value );
	}, 'Please enter a valid email address.');
  
  jQuery.validator.addMethod("confirmPasswordCheck", function(value, element) {
	  // allow any non-whitespace characters as the host part
	  
	  var password = $('#passwordSignUp').val();
	  
	  return this.optional( element ) || (value == password) ;
	}, 'Passwords do not match');
  
  $("#loginForm").validate({
	  errorElement:'div',

		//specify the validation rules
		rules:{
			emailSignIn:{
				required:true,
				laxEmail:true
			},
			password:"required",

		},

		//specify the error messages
		messages:{
			password:{
				required: "Please enter your password",
			},
			emailSignIn:{
				required: "Please enter your Email ID",
			}

		},
		submitHandler: function(form) {
		   // $(form).ajaxSubmit();
			login();
			//alert("hgvn");
		  }

	});
  
  $("#createGroupForm").validate({
	  errorElement:'div',

		//specify the validation rules
		rules:{
			
			groupName:"required",
			groupDescription: "required"

		},

		//specify the error messages
//		messages:{
//			password:{
//				required: "Please enter your password",
//			},
//			emailSignIn:{
//				required: "Please enter your Email ID",
//			}
//
//		},
		submitHandler: function(form) {
		   // $(form).ajaxSubmit();
			createGroup();
			//alert("hgvn");
		  }

	});
  
//  $("#createGroupButton").click(function(){
//	  createGroup();  
//  });
  
  
  //upload image
  
  $("#my-file").change(function(){
		
		
		
		var fReader = new FileReader();
		fReader.readAsDataURL(this.files[0]);
		fReader.onloadend = function(event){
			//event.target.result
			var fileName = $("#my-file").val();
//			alert(fileName);
			if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileName)) {              
			    alert('You must select an image file only');               
			    }
			
			else{
				
				uploadProfileImageToServer(event.target.result);
			//	alert("path "+ event.target.result);
//				var profileImg = "<img src = '"+event.target.result+"' class= 'img-thumbnail' alt='profile-pic'/>";
//				//	alert(profileImg);
//					$("#my-profile-photo").html(profileImg);	
			}
			
		}
		
	
	});
  
  


  
  
  $("#myGroupModal .modal-footer .join").click(function(){
var id = $(this).attr("id");

//alert("id "+id);
	
joinGroup(id);

	});

	$("#myGroupModal .modal-footer .leave").click(function(){
		var id = $(this).attr("id");
    leaveGroup(id);
		

	});
  
  
  $("#postPhoto").change(function(){
		
	 getImageByteCode(this, "photo_byte_code");
		
		
		
		
  });
  
  $("#groupPhotoPath").change(function(){
		
		 getImageByteCode(this, "group-photo-hidden");
			
			
			
			
	  });
  
  
  $('#addInterest').click(function(){
	
	  addInterest();
	  
  });
  
  $('input#addCityButton').click(function(){
	  
	  updateCity();
	  
  });
  
  $('a#getAllTravellers').click(function(){
	  
	  getAllTravellers();
	  
  });
  
  
 $('#my_travel_interests').keyup(function(){
	  
	 getAllInterestsAuto(this.value);
	  
  });
  
  $('a#logoutButton').click(function(){
		
		logout();
		
	});
  

  
  $('#passwordSignUp').strengthMeter('text', {
      container: $('#password-hierarchy-text'),
      hierarchy: {
          '1': ['text-danger', 'Think about a stronger password!'],
          '5': ['text-warning', 'Weak'],
          '10': ['text-warning', 'Strong'],
          '15': ['text-success', 'Very Strong']
      }
  });
  
  $("#checkboxnumone").click(function(){
		

		$(".checkone").prop("checked",$(this).prop("checked"));
		var i = $(this).parent().parent().find('i').removeClass('hide');
		//alert(i);
		
		
		$("p:lt(3)").html("true");
		
		
		if(!$(this).is(":checked")){
			$(this).parent().parent().find('i').addClass('hide');
			$("p:lt(3)").html("false");
		}	
	});


  
  
	});

function hideUserMenuDivs(){
	
	$(".content>div:not('.post-login')").removeClass('hide');	
	$(".content>div.post-login").addClass('hide');
}

function loginSuccess(){
//	alert("login activity starts")
	
	hideUserMenuDivs();

	var userDetails = localStorage.getItem("UserDetails");
//	alert("hdsjd >>>"+userDetails);
	var userObj = $.parseJSON(userDetails);
	var userFirstName = userObj.firstName;
	var userLastName =  userObj.lastName;
	var userCity = userObj.userCity;

	
	$("li#login").css("display","none");
	$("li#notifications").css("display","inline-block");
	$("li#userMenu>a").html("Hi,"+userFirstName);
	$("#my-profile-name").html(userFirstName+" "+userLastName);
	$("#my_city").val(userCity);
	$("li#userMenu").css("display","inline-block");
	$('#myModal').modal('hide');
	
	
	var profileImg = "<img src = '"+userObj.photoPath+"' class= 'img-thumbnail' alt='profile-pic'/>";
	$("#my-profile-photo").html(profileImg);
	
	
	localStorage.setItem("name", userFirstName);
	
	
}

function setMyPosts(){
	
	var posts = localStorage.getItem("AllPosts");
//	alert("for posts >>>"+posts);
	

	var postsObj = $.parseJSON(posts);
	
	$(".my_timeline").html("");
	
	var post ="";
	for(var i = 0 ; i < postsObj.length; i++){
		var classA="";
//		alert("yey"+postsObj[i].postDate);
		if(i%2 !== 0){
			
			classA="timeline-inverted";
		}
		post="<li class='"+classA+"'>"+
        "<div class ='timeline-badge'><i class='fa fa-twitter'></i>"+
        "</div>"+
        "<div class='timeline-panel'>"+
           " <div class='timeline-heading'>"+
                "<h4 class='timeline-title'>"+postsObj[i].postText+"</h4>"+
                "<p><small class='text-muted'><i class='fa fa-clock-o'></i>"+postsObj[i].postDate+"</small>"+
               "</p>"+
            "</div>"+
            "<div class='timeline-body'>"+
            "<img class = 'timeline-img' src ='"+postsObj[i].postPhoto+"' />"+
            "</div>"+
        "</div>"+
    "</li>";
		
//		alert("html "+post);
		$(".my_timeline").append(post);
	}

	
	
}

function logout(){
	//alert("logging out");
    hideUserMenuDivs();
    localStorage.clear();
	localStorage.setItem("isloggedIn","false");
	
	$("li#login").css("display","inline-block");
	$("li#userMenu").css("display","none");
	$("li#notifications").css("display","none");
	
}



function goBackOrRefresh() {

   var isLoggedIn = localStorage.getItem("isloggedIn");
	if(isLoggedIn == "true"){
		
		
		loginSuccess();
		
	
		var div = "";
		var x = document.URL;
		var parts = x.split("#");
		if(parts.length==2){
			div =parts[1];
			showMyDiv(div);
		}	
		
	}
	else{
		logout();
	}
}

function showMyDiv(div){
	
	
	
	$(".content>div:not('#"+div+"')").addClass('hide');
	$(".content>div#"+div+"").removeClass('hide');
	
	if(div=="travellers"){
		
		getAllTravellers();
	}
	else if (div == "travel-groups"){
	//	alert("show Div "+div);
		getAllGroups();
	}
	else if (div == "profile"){
		getMyPosts();
		getTravelBuddies();
		getAllInterests();	
		getNotifications();
}
}//

function setMyNotifications(){
	
	var notif = localStorage.getItem("AllNotifications");
	var notObj = JSON.parse(notif);
	$("#notification-body").html("");
	
	var table = "<table class ='table-hover'>"+
	"<tr><th><input id='checkboxnumone' type='checkbox' name='name' value='name'></th>"+
		"<th>Select all</th>"+
		"<th><a><i class='fa fa-check hide mark-as-read'ng-click='markAsRead()'>Mark as read</i></a>"+
			"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a><i class='fa fa-trash delete-selected hide'"+
				"ng-click='deleteSelected()'>Delete</i></a></th>";
	
	$("span.count").html(notObj.length);
	
	for (var i = 0; i <notObj.length;i++){
	table+=	"<tr>"+
	"<td><input type='checkbox' id='1' class='checkone'"+
	"value='name'></td>"+
"<td colspan='2' id ='m"+notObj[i].notificationID+"' ng-click='markRowAsRead(this.id);'><a>"+notObj[i].notificationContent+"</a></td>"+
"</tr>"
		
	}
	

table+="</table><p class='no-notifications hide'>No notifications left !</p>";

$("#notification-body").html(table);
	
	
	
}
function setAllInterests(){
	
	var intr = localStorage.getItem("AllInterests");
//	alert(intr);
	var interests = JSON.parse(intr);
	var interestPins = ""
		
		$("#allInterests").html("");
	for(var i = 0; i<interests.length;i++){
		
		interestPins += "<button id ='"+interests[i].interestName+"' class='pin btn btn-primary' type='button'>"
		  +interests[i].interestName+ "<span class='badge'> + </span>"+
		  "</button>";
		
		
	}
	
	$("#allInterests").html(interestPins);
	
	
	$("button.pin").click(function(){
		
	
		
		var selectedInt = $(this).attr("id");
//		alert(selectedInt);
		$("#my_travel_interests").val(selectedInt);
		
	});
	
}

function showAllTravelBuddies(){
	
	var travellers = localStorage.getItem("AllTravelBuddies");
//	alert(travellers);
	var travellerList = JSON.parse(travellers);
	
	var travellers="";
	
	for(var i = 0; i<travellerList.length; i++ ){
		
		var cityKnown = "";
		
		var interests = "";
		if(travellerList[i].interests.length>0){
			interests += "Interested in : ";
		}

		var interestObj = travellerList[i].interests;

		//alert(interestObj[0].interestName);

		for(var j = 0;j< interestObj.length ; j++){
			
			interests +=interestObj[j].interestName+" | " ;
		}

			
		
		if(travellerList[i].userCity!=null){
			
			cityKnown=	"<h5>Lives in : "+travellerList[i].userCity+"</h5>" ;
		}
		var buddyStatus ="Add Buddy";
		
		if(travellerList[i].isTravelBuddy == "Y"){
			
			buddyStatus ="Remove Buddy";
		}
		
		else{
			
			buddyStatus ="Add Buddy";
		}
		
		 travellers +=  "<li id = 'traveller"+i+"' data-toggle='tooltip' title='Add Friend'> " +
		 		"<div class ='container-fluid'>" +
		 		"<div class ='col-sm-3'><img class ='img-thumbnail'  src = '"+travellerList[i].photoPath+"' alt='buddy' /></div>" +
		 		"<div class ='col-sm-2'><h4><a href = '#' id ='"+travellerList[i].emailID+"'>"+travellerList[i].firstName+" "+travellerList[i].lastName+"</a></h4>"+
//		 		"<h5>Lives in : "+travellerList[i].userCity+"</h5>" +
		 		cityKnown+
		 		"<h5>"+interests+"</h5>";
		 		"<input type = button class = 'add-remove btn-sm btn btn-primary' value = '"+buddyStatus+"' id ='"+travellerList[i].emailID+"'/></div>"+
		 		"</div>" +
		 		"<li>";
		
		
	}
	
	$(".list-of-budies").html(travellers);
	
	
	
	$(".add-remove").click(function(){
		
	var action =	$(this).val(); 
	var emailID = $(this).attr("id");
	
		
		addORRemoveBuddy(emailID, action);	

		
	});



}




function showAllTravellers(){
	
	var travellers = localStorage.getItem("AllTravellers");
	alert(travellers);
	var travellerList = JSON.parse(travellers);
	
	var travellers="";
	
	for(var i = 0; i<travellerList.length; i++ ){
var cityKnown = "";
var interests = "";
if(travellerList[i].interests.length>0){
	interests += "Interested in : ";
}

var interestObj = travellerList[i].interests;

//alert(interestObj[0].interestName);

for(var j = 0;j< interestObj.length ; j++){
	
	interests +=interestObj[j].interestName+" | " ;
}

		
		if(travellerList[i].userCity!=null){
			
			cityKnown=	"<h5>Lives in : "+travellerList[i].userCity+"</h5>" ;
		}
		
		var buddyStatus ="Add Buddy";
		
		if(travellerList[i].isTravelBuddy == "Y"){
			
			buddyStatus ="Remove Buddy";
		}
		
		else{
			
			buddyStatus ="Add Buddy";
		}
		
		 travellers +=  "<li id = 'traveller"+i+"' data-toggle='tooltip' title='Add Friend'> " +
		 		"<div class ='container-fluid'>" +
		 		"<div class ='col-sm-3'><img class ='img-thumbnail'  src = '"+travellerList[i].photoPath+"' alt='buddy' /></div>" +
		 		"<div class ='col-sm-4'><h4><a href = '#' id ='"+travellerList[i].emailID+"'>"+travellerList[i].firstName+" "+travellerList[i].lastName+"</a></h4>"+
//		 		"<h5>Lives in : "+travellerList[i].userCity+"</h5>" +
		 		cityKnown+
		 		"<h5>"+interests+"</h5>";
		 		"<input type = button class = 'add-remove btn-sm btn btn-primary' value = '"+buddyStatus+"' id ='"+travellerList[i].emailID+"'/></div>"+
		 		"</div>" +
		 		"<li>";
		
		
	}
	
	$(".list-of-travellers").html(travellers);
	
	
	
	$(".add-remove").click(function(){
		
	var action =	$(this).val(); 
	var emailID = $(this).attr("id");
	
		
		addORRemoveBuddy(emailID, action);	

		
	});



}


function showAllGroups(){
	
//	alert(" showing groups ");
	
	var travelGroups = localStorage.getItem("AllGroups");
	
	var travelGroupsList = JSON.parse(travelGroups);
	

	
	var travelGroupDiv="";
	

	
	 $("#group-container").html("");
	
	for(var i = 0; i<travelGroupsList.length; i++ ){
		
		var showOrNot = "hide";
		var members = travelGroupsList[i].members;
		if(travelGroupsList[i].userIsMember == "Y"){
			showOrNot = "";
			
		}else{
			showOrNot ="hide";	
		}
		var memberDiv = "";
		
//		 alert("members.length "+members.length)
		for (var j = 0; j<members.length; j++){
			
			memberDiv+="<li><a>" +
					"<img src='"+members[j].photoPath+"' class='img-thumbnail img-circle' " +
							"alt='"+members[j].firstName+"_photo' /></a></li>";

			//console.log(">>> members >> "+members[j].photoPath);
		}

		travelGroupDiv ="<div class='group  col-md-4 col-sm-6'>"+
		"<div id ='group_"+travelGroupsList[i].groupID+"'>"+
		   "<div class ='group-item' data-toggle='modal' data-target='#myGroupModal'>"+
			"<h4><a href ='#details'>"+travelGroupsList[i].groupName+"</a></h4>"+
			"<ul>"+memberDiv+
            "</ul>"+
            members.length+
			" members <i class='fa fa-check-circle fa-2x "+showOrNot+"' ></i>"+
		"</div>"+
		"</div>"+
	"</div>";
		$("#group-container").append(travelGroupDiv);
		
		
		
		 $("#group_"+travelGroupsList[i].groupID).css("background-image","url('"+travelGroupsList[i].groupPhotoPath+"')");
		
		 
		 
		  $("#travel-groups .group-item").click(function(){
			  
			  

			  	var groupID = $(this).parent().attr('id');
			  	
			  	var groupNoArray = groupID.split("_");
			  	
			  	var groupNo = groupNoArray[1];
			  	
			  	alert("no "+groupNo);
			  	
				$("button").attr("id", groupNo);
			  	
				var travelGroups = localStorage.getItem("AllGroups");
				
			  	alert("travelGroups "+travelGroups);

				
				var travelGroupsList = JSON.parse(travelGroups);
				
				var selectedGroup = null;
				
				for(var i = 0; i < travelGroupsList.length; i++){
					
					if (travelGroupsList[i].groupID == groupNo){
						selectedGroup = travelGroupsList[i];
						
					}
				}

				
				
				//alert("travelGroups "+travelGroupsList.length);
			  	var url =selectedGroup.groupPhotoPath;
			  
			  	
			  	var info =selectedGroup.groupDescription;
			  	
			  	
			  	$("#myGroupModal .modal-body h3").html(info);
			  	
			  
			  	
			  if(selectedGroup.userIsMember == "Y"){
				  
			  		
			  	$("#myGroupModal .modal-body p").html('You are a member');
			  	
			  	$("#myGroupModal .leave").removeClass('hide');
			  	$("#myGroupModal .join").addClass('hide');
			  	
			  	}else{
			  		$("#myGroupModal .modal-body p").html('Join now');
			  		$("#myGroupModal .join").removeClass('hide');
			  		$("#myGroupModal .leave").addClass('hide');
			  		
			  	}
			  	
			  	$("#myGroupModal .modal-header").css("background-image","url('"+url+"')");
			  });
		 
		 
		
	}
//	alert(travelGroupDiv);
	

}
function getLocation() {
	//alert('getLocation');
    if (navigator.geolocation) {
    	
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {

    
    
    getCurrentAddress(position.coords.latitude,position.coords.longitude);
    
   // getPlacesToBe(position.coords.latitude,position.coords.longitude);
}
function getImageByteCode(element, hiddenFieldID){
	
//	alert("here")
	
			
			var fReader = new FileReader();
			fReader.readAsDataURL(element.files[0]);
			fReader.onloadend = function(event){
				//event.target.result
				var fileName = $(element).val();
//				alert(fileName);
				if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(fileName)) {              
				    alert('You must select an image file only');
 
				    }
				
				else{
	            $("#"+hiddenFieldID).val(event.target.result);
	           
	           // alert("finally "+$('#'+hiddenFieldID).val());
				}
				
			}
}