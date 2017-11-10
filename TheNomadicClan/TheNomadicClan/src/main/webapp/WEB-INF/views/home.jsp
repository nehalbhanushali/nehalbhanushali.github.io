<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ page session="false" %>
<!-- <html> -->
<!-- <head> -->
<!-- 	<title>Home</title> -->
<!-- </head> -->
<!-- <body> -->
<!-- <h1> -->
<!-- 	Hello world!   -->
<!-- </h1> -->

<%-- <P>  The time on the server is ${serverTime}. </P> --%>

<%-- <% response.sendRedirect("index.html");%> --%>

<!-- </body> -->
<!-- </html> -->

<!DOCTYPE html>
<html lang="en">
<head>
<!-- ###### to do understand meta -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<!--     <meta name="description" content=""> ###### to do -->
<!--     <meta name="nehal" content=""> ###### to do-->


<title>THE NOMADIC CLAN</title>
<!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<!-- Bootstrap core CSS -->
<link href="resources/css/bootstrap.min.css" rel="stylesheet">
<link href="resources/css/CustomStyles.css" rel="stylesheet">
<link href="resources/css/timeline.css" rel="stylesheet">
<link href="resources/css/font-awesome.min.css" rel="stylesheet">

<script src="resources/js/angular.min.js"></script>
<script src="resources/js/CustomAngular.js"></script>
<script
	src="https://maps.googleapis.com/maps/api/js?libraries=places&language=en&key=AIzaSyBtI7AN64cEY4OHkRyaPJd_RwiuDe_pA-o">
    </script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
<!--###### to do -->


</head>
<!-- NAVBAR
================================================== -->
<body ng-app="myApp" ng-controller="notificationController" onhashchange ="goBackOrRefresh()">
<!-- <body ng-app="myApp" ng-controller="notificationController" > -->
	<div class="navbar-wrapper header">
		<div class="container">

			<nav class="navbar navbar-inverse navbar-fixed-top" id="myNavbar">
				<div class="container-fluid">
					<!-- ## to do what difference? -->
					<div class="navbar-header">
						<div class="navbar-toggle collapsed" data-toggle="collapse"
							data-target="#navbar" aria-expanded="false"
							aria-controls="navbar">

							<i class="fa fa-bars"></i>
							
							
						</div>
						<a class="navbar-brand" href="#">
						
<!-- 						<h5 class ="header-brand-name">The Nomadic <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clan</h5> -->
						<img class ="header-logo" src="resources/img/logo-small.png"
							alt="logo" /></a>
					</div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav my-left-menu">
							<li class="active"><a href="#home">Home</a></li>
							<li><a href="#subscribe">Deals</a></li>
							
							                <li><a  href=""><span class ="fa fa-map-marker"></span></a></li>

							<li class="dropdown wide-li" ><input type="text"
								class="form-control my-cityName" placeholder="My Location"
								id="loc" />
								 <script>
                var input = document.getElementById('loc');
                var autocomplete = new google.maps.places.Autocomplete(input);
                
               
            </script> 
            
       </li>
						</ul>

						<ul class="nav navbar-nav right-side-menu">
							<li><input type="text"
								class="form-control input-sm my-underline-input" name ="q"
								style="display: none" id="my-header-searchBox"
								placeholder="search" /></li>
							<li><a href="#" id="my-header-searchIcon-a"><i
									class="fa fa-search"></i></a></li>
							<li id="login"><a href="#" data-toggle="modal"
								data-target="#myModal">Login</a></li>
							<li id="notifications" style="display: none;"><a href="#"
								data-toggle="modal" data-target="#myNotificationsModal"> <i
									class="fa fa-bell"></i> <span class="count" ng-show="count>0">{{count}}</span>



							</a></li>
							<li id="userMenu" class="dropdown" style="display: none;"><a
								href="#" role="button">Menu <span class="caret"></span></a> 
								
								<ul class="dropdown-menu">
									<li><a href="#profile">Profile</a></li>
									<li><a href="#travel-groups">Groups</a></li>
									<li><a id = "getAllTravellers"href="#travellers">Travellers</a></li>
									<li><a href="#home" id='logoutButton'>Logout</a></li>
								</ul></li>
							<li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li><li>&nbsp;</li>	
						</ul>
					</div>
				</div>
			</nav>

		</div>
	</div>

	<div class="content">

		<div class="gallery  fade in active" id="home">


			<!-- Carousel
    ================================================== -->
			<div id="myCarousel" class="carousel slide" data-ride="carousel">
				<!-- Indicators -->
				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner" role="listbox">
					<div class="item active">
						<img class="first-slide" src="resources/img/green_mountains.jpg"
							alt="First slide">
						<div class="container">
							<div class="carousel-caption">
								<h1>Welcome to The Nomadic Clan</h1>
								<p>Cras justo odio, dapibus ac facilisis in, egestas eget
									quam. Donec id elit non mi porta gravida at eget metus. Nullam
									id dolor id nibh ultricies vehicula ut id elit.</p>
								
							</div>
						</div>
					</div>
					<div class="item">
						<img class="second-slide" src="resources/img/similar-interest.jpg"
							alt="Second slide">
						<div class="container">
							<div class="carousel-caption">
								<h1>Find people of similar travelling interests</h1>
								<p>Cras justo odio, dapibus ac facilisis in, egestas eget
									quam. Donec id elit non mi porta gravida at eget metus. Nullam
									id dolor id nibh ultricies vehicula ut id elit.</p>
								
							</div>
						</div>
					</div>
					<div class="item">
						<img class="third-slide" src="resources/img/join-travel-groups.jpg"
							alt="Third slide">
						<div class="container">
							<div class="carousel-caption">
								<h1>Join Travel Groups</h1>
								<p>Cras justo odio, dapibus ac facilisis in, egestas eget
									quam. Donec id elit non mi porta gravida at eget metus. Nullam
									id dolor id nibh ultricies vehicula ut id elit.</p>
								
							</div>
						</div>
					</div>
					
					<div class="item">
						<img class="fourth-slide" src="resources/img/get-Travel-buddies.jpg"
							alt="Fourth slide">
						<div class="container">
							<div class="carousel-caption">
								<h1>Get Travel buddies.</h1>
								<p>Cras justo odio, dapibus ac facilisis in, egestas eget
									quam. Donec id elit non mi porta gravida at eget metus. Nullam
									id dolor id nibh ultricies vehicula ut id elit.</p>
								
							</div>
						</div>
					</div>
				</div>
				<a class="left carousel-control" href="#myCarousel" role="button"
					data-slide="prev"> <span
					class="fa fa-chevron-left fa-2x" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a> <a class="right carousel-control" href="#myCarousel" role="button"
					data-slide="next"> <span
					class="fa fa-chevron-right fa-2x" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
			<!-- /.carousel -->

		</div>


		<div id="subscribe" class=" container-fluid">

			<div class="col-lg-6  row-2 my-coupon">
				<div>
					This week only: Over 50% off on trip to Singapore
					<button type='button' class="btn btn-warning">Get Coupon!</button>
				</div>
			</div>

			<div class="col-lg-6  row-2 emailSubscription">

				<div>
					<i class="fa fa-2x fa-envelope-o"></i> Want to be notified for
					latest amazing trips, travel deals, special offers, and other
					information? <br />
					<br />
					<form id="SubscriptionForm">

						<div class="input-group ">
							<input type="email" placeholder="example@abc.com"
								class="form-control"> <span class="input-group-btn">
								<button class="btn btn-success" type="button">Subscribe</button>
							</span>
						</div>

					</form>
				</div>
			</div>

			<div class="col-lg-12 row-3 getDealCode">
				<div class="col-lg-6">$25 Off Your First App Hotel Booking
					With your private coupon code</div>

				<div class="col-lg-6">


					<p>Send a link to your phone for the FREE Expedia App and code.</p>
					<div class="input-group ">

						<input type="tel" placeholder="XXX-XXX-XXXX" class="form-control">
						<span class="input-group-btn">
							<button class="btn btn-warning" type="button">Send</button>
						</span>
					</div>

				</div>
				<div class="col-lg-12">
					<br />
					<p class="my-terms-and-conditions">
						Limit one (1) coupon per user account, per qualifying hotel
						booking every 24 hours. By providing your number, you agree to
						receive a one-time automated text message with a link to get the
						app. Our app offers promotions and booking services. No purchase
						necessary. Standard text message rates may apply. <a>See
							Details</a>
					</p>
				</div>

			</div>
			<div class ='col-lg-4 row-2 emailSubscription'>
			<div>
			<ul class ='inline-ul'>
			<li><img src ="resources/img/couple.png" alt ="couple" /></li>
			<li> Couple discount.sms 'COUPLE' to 
	          123-123-1234  and avail amazing couple discounts. Hurry!!!</li>
			</ul>
			 
			</div>
			
			</div>
			<div class ='col-lg-4 row-2 my-coupon'>
			
			<div>
			
			<ul class ='inline-ul'>
			<li><i class = 'fa fa-graduation-cap fa-2x'></i></li>
			<li>  Graduated this year?? SMS 'GRAD' to 
	          123-123-1234  and avail amazing student discounts. Hurry!!!</li>
			</ul>
			  
			</div>
			</div>
			<div class ='col-lg-4 row-2 emailSubscription'>
			<div>
			
				<ul class ='inline-ul'>
			<li><i class ='fa fa-picture-o fa-2x'></i></li>
			<li>   Send your best clicks to <a href="mailto:admin@nomad.com?subject=Photographs">admin@nomad.com</a>  and win exiting gifts</li>
			</ul>

			 <ul></ul>
			
			</div>
			</div>
		</div>

<!-- 		<div class="" id="row things-to-do"></div> -->


		<div class="post-login hide" id="profile">
<div class ="profile-cover">
			<div class='col-lg-2'>
				<div class='profile-pic'>
					<div class="my-profile-photo" id="my-profile-photo"></div>
					<div class="profile-pic-edit-group">
						<!-- Edit <a id ="edit-photo"><i class='fa fa-edit fa-2x input-file' class ="upload-pic"><input type="file" accept="image/*"></i></a> -->
						<span class="fa fa-edit fa-2x btn-file upload-pic"> <input
							type="file" id="my-file" accept="image/*">
						</span>
					</div>
				</div>
			</div>
			<div class=col-lg-10>
            <div class = "cover-name"><h3 id="my-profile-name">bhb jghgj</h3></div>




			</div><!-- bjh -->



</div>

<div class="profile-details">

          
			<div class ="profile-menu-tabs" id ="profile-menu-tabs"	>
			 
   <ul class="nav nav-tabs " >
   <!--  <li class="active"><a data-toggle="tab" href="#about-me">About</a></li>
    <li><a data-toggle="tab" href="#my-groups">Groups</a></li> -->
    <li class="active"><a data-toggle="tab" href="#my-trips">Timeline</a></li>
     <li><a data-toggle="tab" href="#my-travel-buddies">Travel Buddies</a></li>
    <li><a data-toggle="tab" href="#about-me">About me</a></li>
  </ul>
  <div class="tab-content">


    <div id="my-trips" class="tab-pane fade in active">
      <div class ='post-form jumbotron'>
      <div>
      
      
                   <form id ="post_form">

								<label
								for="postText">Add a description</label>
								<textarea id = "postText" name="postText" class ="form-control" ></textarea> 
								<div class="col-md-offset-2">
								<div class =" col-lg-4">
									<label
								for="postPhoto">Attach a photograph</label>
								<span class="fa fa-edit fa-2x btn-file upload-pic"> 
								<input type=file  id = "postPhoto" name="postPhoto" accept="image/*" class ="form-control"/> 
								</span>
							<input type = hidden id = "photo_byte_code"/>
							</div>
							<div class="col-lg-4">
								   <input type="submit" value = "Post" id ="createPostButton"class="btn btn-primary"/>
								  </div> </div>
                   </form>
                     </div>
    </div>
      <h3>My Timeline</h3>
                    <div class="panel panel-default">
                 
                        <div class="panel-body">
                            <ul class="timeline my_timeline">

                            
                    
                            </ul>
                        </div>
                        <!-- /.panel-body -->
                        
                    </div>  </div>
      <div id="my-travel-buddies" class="tab-pane fade">
      <h3>My Buddies</h3>
      <ul class ="list-of-budies">
      
      
      </ul>
    </div>
    
     <div id="about-me" class="tab-pane fade container-fluid">
     <h3>Edit Info</h3>
     <div class = "row">
     <div class ='col-sm-8'> My Location<input type = text id = "my_city"/> 
     <script>
                var input = document.getElementById('my_city');
                var autocomplete = new google.maps.places.Autocomplete(input);
                
               
            </script> 
     
     </div>
    
      <div class ='col-sm-2'> <input type = button class = 'btn-sn btn btn-primary' value ="Edit Location" id = "addCityButton"/> </div>
   <br/><br/>
    <div class ='col-sm-8'> Add Travel Interests<input type = text id = "my_travel_interests"/> 
   
     
     </div>
    
      <div class ='col-sm-2'> <input type = button class = 'btn-sn btn btn-primary' value ="Add Interest" id = "addInterest"/> </div>
   <div class = 'col-sm-10' id = "allInterests">
   
   </div>
   
   
     </div>
    </div>
  
  </div>
			
			
			</div>

</div>


		</div>
	


		<div id="travel-groups" class="post-login hide">
		    <div class = container-fluid>
		    <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Groups</a>
    </div>
    <ul class="nav navbar-nav">
    
      <li><a href="#" data-toggle="modal" class ="btn btn-sm"
								data-target="#myGroupCreateModal"><b>Create new group +</b></a></li>
<!--       <li><a><input type = "text" placeholder="search group"><i class="fa fa-search" ></i></a></li>  -->
    </ul>
  </div>
</nav>
		    
		    </div>
		
			<div class="container-fluid" id="group-container">
				

			</div>

		</div>
		<!-- /.travel-groups -->
		
		<div id="travellers" class="post-login hide">
		<div class= "container-fluid">
		  <ul class ="list-of-travellers"></ul>
		</div>
		</div>


	</div>
	<!-- / content ends here -->

	<!-- FOOTER -->
	<footer>
		<p class="pull-right">
			<a href="#" class="myIconHolder my-round-badge my-black"
				id="myTopScroller"> <i class="fa fa-angle-double-up"></i>
			</a>
		</p>
		<!--         <p class="pull-right" id="myTopScroller"><a href="#">Back to top</a></p> -->
		<p>
			&copy; 2014 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a
				href="#">Terms</a>
		</p>
	</footer>



	<!-- Modal -->
	<div class="container">
	<div id="myModal" class="modal fade" role="dialog">
		<!-- <div class="modal-dialog modal-md"> -->
			<div class="modal-dialog">
			<!-- Modal content-->
			<div class="modal-content">
				<div class="my-modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<ul class="nav nav-tabs">
						<li class="active"><a data-toggle="tab" href="#my-login-form">Log
								In</a></li>
						<li><a data-toggle="tab" href="#my-signup-form">Sign Up</a></li>
						
					</ul>
				</div>
				<div class="modal-body tab-content">

					<div class='my-form tab-pane fade in active' id="my-login-form">
						<form name="my-login-signin-form" id="loginForm">


							<label for="emailSignIn">Email Address</label> <input type=email
								id="emailSignIn" name="emailSignIn"
								class="emailSignIn form-control" /> <label for="password">Password</label>

							<input type=password id="password" name="password"
								class="password form-control" /> <br /> <input type="submit"
								id="SignIn" value="Sign In" name="signInButton"
								class="btn btn-info form-control">

<br/><br/>
<!--       <p>Not a member? <a data-toggle="tab"  href ="#my-signup-form">Sign Up</a>   -->

						</form>
					</div>
					<div class='my-form tab-pane fade' id="my-signup-form">
					<form id = "registrationForm">

							<label for="firstName">First Name</label> 
							
							<input type="text" id="firstName" value = "Bhagvati" name="firstName" class="firstName form-control" /> 

							<span id="" class=""></span>
							
							<label for="lastName">Last Name</label> 
		
							<input  type="text" id="lastName" value = "Ramesh" name="lastName" class="lastName form-control" /> 

							<span id="" class=""></span>

							
							 <label for="userID">Email Address</label>
							  <input type="email" id="emailID" value = "bhagvati@gmail.com" name="emailID"
								class="emailSignUp form-control" /> <span id="" class=""></span>
								
							<label for="password">Password</label>
							 <input type="password"
								id="passwordSignUp" value = "1234" name="password"
								class="passwordSignUp form-control" /> <span
								id="password-hierarchy-text" class=""></span><br/>
								<label
								for="confirmPassword">Confirm Password</label> 
								<input type=password  value = "1234" id="confirmPassword" name="confirmPassword"
								class="form-control" /> <br />
								<div class ="form-group">
								
							
								Gender <label
								for="Male" class ="radio-inline"> Male</label>
								<input type=radio  value = "Male"  id ="Male" name="gender"/>
								
								
								<label
								for="Female" class ="radio-inline"> Female</label>
								<input type=radio  value = "Female"  id = "Female" name="gender" /> 
								 	</div>
								 <input type="submit" 
								value="Sign Up" name="signUpButton" id = "signUpButton"
								class="btn btn-info form-control">
								<br/><br/>

</form>

					</div>
&nbsp;
				</div>
			<!-- 	<div class="modal-footer">

				</div> -->
			</div>

		</div>
	</div>
</div>
	<!-- ======================================================================================
==============================================POST LOGIN MODALS===============================
================================================================================ -->



<div class="modal fade" id="myGroupCreateModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
       <i class ='close fa fa-times-circle fa-2x' data-dismiss="modal"></i>
          <h4 class="modal-title">Create group</h4>
        </div>
          <form id = "createGroupForm">
        <div class="modal-body" >
      
              <div class ="form-group">

								 <label
								for="groupName"> Group Name</label>
								<input type=text  id ="groupName" name="groupName" class ="form-control"/>

								 	</div>
								 	<div class ="form-group">
								<label
								for="groupDescription"> Group Description</label>
								<textarea id = "groupDescription" name="groupDescription" class ="form-control" ></textarea> 
								</div>
								
								<div class ="form-group">
									<label
								for="groupTitle">Select a photograph for the group</label>
								<input type = hidden id ="group-photo-hidden"/>
								<input type=file  id = "groupPhotoPath" name="groupPhotoPath" accept="image/*" class ="form-control"/> 
								</div>
								 	
								 	
		
        </div>
        <div class="modal-footer">
          <input type="submit" value = "Create" id ="createGroupButton"class="btn btn-primary"/>
        </div>
        </form>
      </div>
      
    </div>
  </div>

<div class="modal fade" id="myGroupModal" role="dialog">
    <div class="modal-dialog modal-sm">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header" >
       <i class ='close fa fa-times-circle fa-2x' data-dismiss="modal"></i>
<!--           <button type="button" class="close" data-dismiss="modal">&times;</button> -->
          <h4 class="modal-title">Group Details</h4>
        </div>
        
        <div class="modal-body" >
          
          <h3></h3>
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default join" data-dismiss="modal">Join</button>
           <button type="button" class="btn btn-default leave hide" data-dismiss="modal">Leave</button>
        </div>
      </div>
      
    </div>
  </div>


	<!-- Modal notifications-->
	<div class="modal fade" id="myNotificationsModal" role="dialog">
		<div class="modal-dialog">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">&times;</button>
					<h4 class="modal-title">My Notifications</h4>
				</div>
				<div class="modal-body" id = "notification-body">
					<!--  <input id="checkboxnumone" type="checkbox" name="name" value="name">Mark All  -->


					

					<p class='no-notifications hide'>No notifications left !</p>
				</div>
				
			</div>

		</div>
	</div>

	<!--  JavaScript
    ================================================== -->



	<script src="resources/js/jquery.min.js"></script>
	<script src="resources/js/bootstrap.min.js"></script>
	<script src="resources/js/password-score.js"></script>
	<script src="resources/js/password-score-options.js"></script>
	<script src="resources/js/bootstrap-strength-meter.js"></script>
	<script src="resources/js/jquery.validate.min.js"></script>
	<script src="resources/js/additional-methods.min.js"></script>
<!-- 	<script src="resources/js/CustomScript.js"></script> -->
    <script src="resources/js/my-script.js"></script>
	<script src="resources/js/ajaxScript.js"></script>





</body>
</html>

