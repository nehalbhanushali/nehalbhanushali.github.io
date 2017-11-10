

<%@ page session="false" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>

<link href="resources/css/bootstrap.min.css" rel="stylesheet">
<link href="resources/css/CustomStyles.css" rel="stylesheet">
<link href="resources/css/timeline.css" rel="stylesheet">
<link href="resources/css/font-awesome.min.css" rel="stylesheet">

<script src="resources/js/angular.min.js"></script>
<script src="resources/js/CustomAngular.js"></script>

</head>
<body> ${x} -- see
<!-- 	<form:form action="adduser.htm" commandName="user" method="post"> -->
	
<form id = "registrationForm">

							<label for="firstName">First Name</label> 
							
							<input type="text" id="firstName" value = "Bhagvati" name="firstName" class="firstName form-control" /> 

							<span id="" class=""></span>
							
							<label for="lastName">Last Name</label> 
		
							<input  type="text" id="lastName" value = "Ramesh" name="lastName" class="lastName form-control" /> 

							<span id="" class=""></span>

							
							 <label for="userID">Email Address</label>
							  <input type="email" id="emailID" value = "Bhagvati@nnn.nnn"name="emailID"
								class="emailSignUp form-control" /> <span id="" class=""></span>
								
							<label for="password">Password</label>
							 <input type="password"
								id="passwordSignUp" value = "Ramesh" name="password"
								class="passwordSignUp form-control" /> <span
								id="password-hierarchy-text" class=""></span><br/>
								<label
								for="confirmPassword">Confirm Password</label> 
								<input type=password  value = "Ramesh" id="confirmPassword" name="confirmPassword"
								class="form-control" /> <br />
								
								 <input type="submit" 
								value="Sign Up" name="signUpButton" id = "signUpButton"
								class="btn btn-info form-control">
								<br/><br/>

</form>
<!-- 						</form:form> -->
						
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