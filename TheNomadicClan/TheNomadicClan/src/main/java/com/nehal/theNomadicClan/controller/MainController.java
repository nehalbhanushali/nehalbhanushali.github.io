package com.nehal.theNomadicClan.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.nehal.theNomadicClan.dao.UserDAO;
import com.nehal.theNomadicClan.pojo.Interest;
import com.nehal.theNomadicClan.pojo.Notifications;
import com.nehal.theNomadicClan.pojo.Post;
import com.nehal.theNomadicClan.pojo.StandardUser;
import com.nehal.theNomadicClan.pojo.TravelGroup;
import com.nehal.theNomadicClan.pojo.User;

@Controller
//@RequestMapping("/TheNomadicClan")
public class MainController {
	
@Autowired
UserDAO userDao;
	
@RequestMapping(value="/registerUser",method = RequestMethod.POST)
protected @ResponseBody String registerUser(@RequestBody User user)  {

	try {
		
		userDao.create(user);
		
		return "Success "+user.getFirstName();
	} catch (Exception e) {
		System.out.println("Exception: " + e.getMessage());
		
		return "Error";
	}

	
	
}



@RequestMapping(value="/updateProfilePicture",method = RequestMethod.POST)
protected @ResponseBody User updateProfilePicture(@RequestBody StandardUser user)  {

	User uNew = new User();
	
	try {
		
		String emailID = user.getEmailID();
	    
		User userTotal = userDao.get(emailID);
		userTotal.setPhotoPath(user.getPhotoPath());
		User userUpdated =userDao.updateUser(userTotal);
		uNew.setEmailID(userUpdated.getEmailID());
		uNew.setPhotoPath(userUpdated.getPhotoPath());
		uNew.setIsError(userUpdated.getIsError());
		uNew.setErrorMessage(userUpdated.getErrorMessage());
	
	
	} catch (Exception e) {
		uNew.setIsError("Y");
		uNew.setErrorMessage(e.getMessage());
		
	}

	return uNew;
	
}


@RequestMapping(value="/addInterest",method = RequestMethod.POST)
protected @ResponseBody ArrayList<Interest> addInterest(@RequestBody Interest userInterest)  {

//	ArrayList<Interest> myInterests = new ArrayList<Interest>();
	
	ArrayList<Interest> allInterests = new ArrayList<Interest>();
	
	try {
		Interest createdInterest = new Interest();
	    allInterests = userDao.getAllInterests();
		
		boolean exists = false;
		for(Interest i : allInterests){
			
			if(i.getInterestName().equals(userInterest.getInterestName())){
				
				exists = true;
			}
		}
		
		if(!exists){
			
			createdInterest = userDao.createInterest(userInterest);
		}
		
		else{
			
			createdInterest = userDao.getInterest(userInterest.getInterestName());
		}

		String emailID = userInterest.getCreatedBy();

	   
		StandardUser userTotal =(StandardUser) userDao.get(emailID);
		
		List<Interest> myInterests = userTotal.getInterests();
		boolean alreadyInterested = false;
		
		for(Interest i : myInterests){
			
			if(i.getInterestName().equals(userInterest.getInterestName())){
				
			alreadyInterested = true;	
			}
		}
		
		if(! alreadyInterested){
		userTotal.getInterests().add(createdInterest);
		
		
		
		User userUpdated =userDao.updateUser(userTotal);
		
		}

		
	
		return allInterests;
	
	} catch (Exception e) {
		
		return null;
	}

	
	
}

@RequestMapping(value="/updateCity",method = RequestMethod.POST)
protected @ResponseBody User updateCity(@RequestBody StandardUser user)  {

	User uNew = new User();
	
	try {
		
		String emailID = user.getEmailID();
	    
		User userTotal = userDao.get(emailID);
		userTotal.setUserCity(user.getUserCity());
		User userUpdated =userDao.updateUser(userTotal);
		uNew.setEmailID(userUpdated.getEmailID());
		uNew.setPhotoPath(userUpdated.getPhotoPath());
		uNew.setUserCity(userUpdated.getUserCity());
		uNew.setIsError(userUpdated.getIsError());
		uNew.setErrorMessage(userUpdated.getErrorMessage());
	
	
	} catch (Exception e) {
		uNew.setIsError("Y");
		uNew.setErrorMessage(e.getMessage());
		
	}

	return uNew;
	
}


@RequestMapping(value="/getAllInterests",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody ArrayList<Interest> getAllInterests(@RequestBody User stUser)  {

	try {
		
		String emailID = stUser.getEmailID();
		    
		StandardUser user = (StandardUser)userDao.get(emailID);
		
	
		
		ArrayList<Interest> allInterests = userDao.getAllInterests();
		
		if(!stUser.getErrorMessage().equals("")){
			allInterests = userDao.getAllInterestsLike(stUser.getErrorMessage());
			
		}
		
		List<Interest> allMyInterests = user.getInterests();
		
		ArrayList<Interest> list = new ArrayList<Interest>();
		
       
			
			list = allInterests;
		
			 Gson gson = new Gson();
		     String output=gson.toJson(list);
		 	System.out.println("before output : " +output);

			for(Interest i2 : allMyInterests){

					list.remove(i2);
				
			}
		
		
     
     String output2=gson.toJson(list);
 	System.out.println("after remove output2 : " +output2);
//		System.out.println(user.getFirstName());
		
	
		
		return list;
	} catch (Exception e) {
		
	
		
		return null;
	}

	
}

@RequestMapping(value="/createGroup",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody TravelGroup createGroup(@RequestBody TravelGroup group)  {

	try {
		
		String emailID = group.getGroupAdminEmailID();
		    
		User user = userDao.get(emailID);
		
		TravelGroup createdGroup = userDao.createGroup(group,user);
		
//		System.out.println(user.getFirstName());
		
		if(createdGroup.getIsError().equals("N")){
			
		
		
//		UserGroup userGroup = userDao.createUserInGroup((StandardUser)user, createdGroup);
		  ((StandardUser)user).getGroupsJoined().add(createdGroup);
		 userDao.updateUser(user);
		 
		 
		 Notifications n = new Notifications();
		 
		 n.setNotificationContent("A group named ' "+group.getGroupName()+" ' has been created");
		 
		 Notifications createdNotification = userDao.createNotification(n);
		 
		 ArrayList<StandardUser> list= userDao.getAllTravellers();
		 
//		 ArrayList<StandardUser> listNew = new ArrayList<StandardUser>();
		 
         
		 
		}
		
		else{
			
			
		}
		
		return createdGroup;
	} catch (Exception e) {
		
		TravelGroup t = new TravelGroup();
		t.setIsError("Y");
		t.setErrorMessage(e.getMessage());
		
		return t;
	}

	
}



@RequestMapping(value="/joinGroup",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody TravelGroup joinGroup(@RequestBody TravelGroup group)  {
	TravelGroup tNew = new TravelGroup();
	
	
	try {
		
		String emailID = group.getGroupAdminEmailID();
		    
		User user = userDao.get(emailID);
		
		
		int groupID = group.getGroupID();
		
		TravelGroup createdGroup = userDao.get(groupID);
		
//		System.out.println(user.getFirstName());
		
		if(createdGroup != null){
			
			

			List<StandardUser> membersInDetail = createdGroup.getMembers();
			
			String isMember = "N";
			for(StandardUser u : membersInDetail){
				
				
				
				if(u.getEmailID().equals(emailID)){
					
					isMember="Y";	
				}
	
			}
			
			if(isMember.equals("N")){
				
			

//		UserGroup userGroup = userDao.createUserInGroup((StandardUser)user, createdGroup);
		  ((StandardUser)user).getGroupsJoined().add(createdGroup);
		 userDao.updateUser(user);
		 
		 createdGroup.getMembers().add((StandardUser)user);
		 
		 userDao.updateGroup(createdGroup);
		 

		 tNew.setIsError("N");
		 
			}else{
				tNew.setIsError("Y");
				tNew.setErrorMessage("You are already a member");
			}
		 
		}
		
		else{
			 tNew.setIsError("Y");	
			 tNew.setErrorMessage("Group not found");
		}
		
		
	} catch (Exception e) {
		
		
		tNew.setIsError("Y");
		tNew.setErrorMessage(e.getMessage());

	}

	return tNew;	
}


@RequestMapping(value="/leaveGroup",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody TravelGroup leaveGroup(@RequestBody TravelGroup group)  {
	TravelGroup tNew = new TravelGroup();
	
	
	try {
		
		String emailID = group.getGroupAdminEmailID();
		    
		User user = userDao.get(emailID);
		
		
		int groupID = group.getGroupID();
		
		TravelGroup createdGroup = userDao.get(groupID);
		
//		System.out.println(user.getFirstName());
		
		if(createdGroup != null){
			
			

			List<StandardUser> membersInDetail = createdGroup.getMembers();
			
			String isMember = "N";
			for(StandardUser u : membersInDetail){
				
				
				
				if(u.getEmailID().equals(emailID)){
					
					isMember="Y";	
				}
	
			}
			
			if(isMember.equals("Y")){
				
			

//		UserGroup userGroup = userDao.createUserInGroup((StandardUser)user, createdGroup);
		  ((StandardUser)user).getGroupsJoined().remove(createdGroup);
		 userDao.updateUser(user);
		 
		 
         createdGroup.getMembers().remove((StandardUser)user);
		 
		 userDao.updateGroup(createdGroup);

		 tNew.setIsError("N");
		 
			}else{
				tNew.setIsError("Y");
				tNew.setErrorMessage("You are already a member");
			}
		 
		}
		
		else{
			 tNew.setIsError("Y");	
			 tNew.setErrorMessage("Group not found");
		}
		
		
	} catch (Exception e) {
		
		
		tNew.setIsError("Y");
		tNew.setErrorMessage(e.getMessage());

	}

	return tNew;	
}


@RequestMapping(value="/addORRemoveBuddy",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody StandardUser addORRemoveBuddy(@RequestBody StandardUser user)  {
	StandardUser sNew = new StandardUser();
	System.out.println(" adding... or removing ");
	
	try {
		
		String userEmailID = user.getEmailID();
		
		String buddyEmailID = user.getIsTravelBuddy();
		    
		StandardUser stUser = (StandardUser)userDao.get(userEmailID);
		
		StandardUser stBuddy = (StandardUser)userDao.get(buddyEmailID);
		
		
	if(stBuddy !=null){
		
		
		if(user.getErrorMessage().equals("Add Buddy")){
			stUser.getTravelBuddies().add(stBuddy);	
			stBuddy.getTravelBuddies().add(stUser);
		}
		else{
			stUser.getTravelBuddies().remove(stBuddy);
			stBuddy.getTravelBuddies().remove(stUser);
		}
		
		
		userDao.updateUser(stUser);
		sNew.setIsError("N");
		
	}else{
		
		sNew.setIsError("Y");
		sNew.setErrorMessage("User not found");
	}
		
//		System.out.println(user.getFirstName());
		
		
	
		
		
	} catch (Exception e) {
		
		
		sNew.setIsError("Y");
		sNew.setErrorMessage(e.getMessage());

	}

	return sNew;	
}




@RequestMapping(value="/createPost",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody Post createPost(@RequestBody Post post)  {
	Post pNew =new Post();
	
	try {
		String emailID = post.getPostCreaterEmailID();
	    
		User user = userDao.get(emailID);
		
		Date date = new Date();
	
		post.setPostDate(date);
		
//		System.out.println("setting date "+date);
		
		Post p = userDao.createPost(post,user);
		
		if(p.getIsError().equals("N")){
			
			pNew.setPostCreaterEmailID(p.getPostCreater().getEmailID());
			pNew.setPostID(p.getPostID());
			pNew.setPostText(p.getPostText());
			pNew.setPostPhoto(p.getPostPhoto());
			pNew.setPostType(p.getPostType());
			pNew.setIsError(p.getIsError());
			pNew.setPostDate(p.getPostDate());
			
			  ((StandardUser)user).getPostsTaggedIn().add(p);
			 userDao.updateUser(user);
		}
		else{
			pNew.setIsError(p.getIsError());
			pNew.setErrorMessage(p.getErrorMessage());
		}
	

		
		
	} catch (Exception e) {
		pNew.setIsError("Y");
		pNew.setErrorMessage(e.getMessage());
		
		
	}
	Gson gson = new Gson();
	String output=gson.toJson(pNew);
	System.out.println("create post output : " +output);

	return pNew;
}



@RequestMapping(value="/getMyPosts",method = RequestMethod.POST)
protected @ResponseBody String getMyPosts(@RequestBody User user)  {

	try {
		
		StandardUser userObj = (StandardUser)userDao.get(user.getEmailID());
		
		List<Post> postsList = userDao.getMyPosts(userObj);
		
		List<Post> resultList = new ArrayList<Post>();
		
		for(Post p : postsList){
			
			Post pNew  = new Post();
			pNew.setPostID(p.getPostID());
			pNew.setPostCreaterEmailID(p.getPostCreater().getEmailID());
			pNew.setPostDate(p.getPostDate());
			pNew.setPostText(p.getPostText());
			pNew.setPostPhoto(p.getPostPhoto());
			
			resultList.add(pNew);
//			System.err.println("<<<<<<<<<<<< >>>>>>>>>>>"+ p.getPostDate());
//			p.getPostCreater().getFirstName();
		}
		
		
		Gson gson =new Gson();
		String output=gson.toJson(resultList);
		
		System.err.println("post output "+output);
		
		return output;
	} catch (Exception e) {
		System.out.println("Exception: ? " + e.getMessage());
		
		return null;
	}

	
	
}

@RequestMapping(value="/createGroup_old",method = RequestMethod.POST)
protected @ResponseBody String createGroup_old(@RequestBody TravelGroup group)  {

	try {
		
//		 StandardUser user = userDao.createGroup(group);
		
//		 userDao.updateUser(user);
		return "Success creating group";
	} catch (Exception e) {
		System.out.println("Exception: " + e.getMessage());
		
		return "Error";
	}

	
	
}


@RequestMapping(value="/loginUser",method = RequestMethod.POST)
protected @ResponseBody String loginUser(@RequestBody User user)  {
	
	User uNew = new User();
	String output = "";
	Gson gson =new Gson();

	try {
//		System.err.println("before output "+user.getEmailID());
		User userLoggedIn = userDao.loginUser( user.getEmailID(), user.getPassword());
		
		if(userLoggedIn !=null){
			
	
		uNew.setUserID(userLoggedIn.getUserID());
		uNew.setEmailID(userLoggedIn.getEmailID());
		uNew.setGender(userLoggedIn.getGender());
		uNew.setFirstName(userLoggedIn.getFirstName());
		uNew.setLastName(userLoggedIn.getLastName());
		uNew.setUserStatus(userLoggedIn.getUserStatus());
		uNew.setUserCity(userLoggedIn.getUserCity());
		uNew.setPhotoPath(userLoggedIn.getPhotoPath());
		uNew.setUserType(userLoggedIn.getUserType());
		uNew.setIsError("N");

		}
		
		else{
			
			uNew.setIsError("Y");
			uNew.setErrorMessage("User not found");
		
		}
		
		
		
	} catch (Exception e) {
		
		uNew.setIsError("Y");
		uNew.setErrorMessage(e.getMessage());
	}

	output=gson.toJson(uNew);
	System.out.println("login output : " +output);
	
	return output;
	
}


@RequestMapping(value="/getAllTravellers",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody ArrayList<StandardUser> getAllTravellers(@RequestBody User user)  {

	ArrayList<StandardUser> usersNew = new ArrayList<StandardUser>();
	
	
	
	try {
		
		ArrayList<StandardUser> users = (ArrayList<StandardUser>) userDao.getAllTravellers();
		
	
		
		for(StandardUser u : users){
			String isBuddy = "N";
			if(!u.getEmailID().equals(user.getEmailID()))
			{
				StandardUser uNew = new StandardUser();
			uNew.setEmailID(u.getEmailID());
			uNew.setFirstName(u.getFirstName());
			uNew.setLastName(u.getLastName());
			uNew.setGender(u.getGender());
			uNew.setPhotoPath(u.getPhotoPath());
			uNew.setUserID(u.getUserID());
			uNew.setUserCity(u.getUserCity());
			uNew.setInterests(u.getInterests());
			List<StandardUser> buddies = ((StandardUser) u).getTravelBuddies();
			
			
			for(StandardUser s : buddies){
				
				if(user.getEmailID().equals(s.getEmailID())){
					
					isBuddy ="Y";
				}
			}
			
			uNew.setIsTravelBuddy(isBuddy);
			
			usersNew.add(uNew);
			}
		}
		
	
		
		return usersNew;
	} catch (Exception e) {
		System.out.println("Exception: ? " + e.getMessage());
		
		return null;
	}

	
	
}

@RequestMapping(value="/getNotifications",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody List<Notifications> getNotifications(@RequestBody User user)  {

	
	
	
	try {
		
StandardUser userObj = (StandardUser)userDao.get(user.getEmailID());
		
ArrayList<Notifications> notifications = userDao.getAllNotifications();
		
		List<Notifications> resultList = new ArrayList<Notifications>();
		
		for(Notifications p : notifications){
			
			Notifications pNew  = new Notifications();
			pNew.setNotificationID(p.getNotificationID());
			pNew.setNotificationContent(p.getNotificationContent());
			
			resultList.add(pNew);
//			System.err.println("<<<<<<<<<<<< >>>>>>>>>>>"+ p.getPostDate());
//			p.getPostCreater().getFirstName();
		
		}
	
		
		return resultList;
	} catch (Exception e) {
		System.out.println("Exception: ? " + e.getMessage());
		
		return null;
	}

	
	
}




@RequestMapping(value="/getTravelBuddies",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody ArrayList<StandardUser> getTravelBuddies(@RequestBody StandardUser user)  {

	ArrayList<StandardUser> usersNew = new ArrayList<StandardUser>();
	
	
	
	try {
		
		StandardUser stUser = (StandardUser) userDao.get(user.getEmailID());
		
		List<StandardUser> buddies = (List<StandardUser>) stUser.getTravelBuddies();
		
	
		
		for(StandardUser u : buddies){
		
				StandardUser uNew = new StandardUser();
			uNew.setEmailID(u.getEmailID());
			uNew.setFirstName(u.getFirstName());
			uNew.setLastName(u.getLastName());
			uNew.setGender(u.getGender());
			uNew.setPhotoPath(u.getPhotoPath());
			uNew.setUserID(u.getUserID());
			uNew.setUserCity(u.getUserCity());
			uNew.setInterests(u.getInterests());
			
			
			uNew.setIsTravelBuddy("Y");
			
			usersNew.add(uNew);
			
		}
		
	
		
		return usersNew;
	} catch (Exception e) {
		System.out.println("Exception: ? " + e.getMessage());
		
		return null;
	}

	
	
}


@RequestMapping(value="/getAllGroups",method = RequestMethod.POST,produces = "application/json")
protected @ResponseBody ArrayList<TravelGroup> getAllGroups(@RequestBody User user)  {

	try {
		
		ArrayList<TravelGroup> travelGroupList = userDao.getAllGroups();
		
		
		
		
		ArrayList<TravelGroup> resultList = new ArrayList<TravelGroup>();
		
		for(TravelGroup t : travelGroupList){
		
			
			TravelGroup tNew  = new TravelGroup();
			tNew.setGroupName(t.getGroupName());
			tNew.setGroupAdminEmailID(t.getGroupAdmin().getEmailID());
			tNew.setGroupDescription(t.getGroupDescription());
			tNew.setGroupID(t.getGroupID());
			tNew.setGroupPhotoPath(t.getGroupPhotoPath());
			
			List<StandardUser> membersInDetail = t.getMembers();
			List<StandardUser> membersList = new ArrayList<StandardUser>();
			String isMember = "N";
			for(StandardUser u : membersInDetail){
				StandardUser uNew = new StandardUser();
				uNew.setEmailID(u.getEmailID());
				uNew.setFirstName(u.getFirstName());
				uNew.setLastName(u.getLastName());
				uNew.setPhotoPath(u.getPhotoPath());
				uNew.setUserID(u.getUserID());
				
				membersList.add(uNew);
				if(u.getEmailID().equals(user.getEmailID())){
					
					isMember="Y";	
				}
	
			}
			
			tNew.setMembers(membersList);
			tNew.setUserIsMember(isMember);
			
			resultList.add(tNew);	
			
			
		}
		
		
		return resultList;
	} catch (Exception e) {
		System.out.println("Exception: " + e.getMessage());
		
		return null;
	}

	
	
}

	@RequestMapping(value="/checkIfEmailIDExists",method = RequestMethod.POST)
	protected @ResponseBody String checkIfEmailIDExists(@RequestBody User user)  {
//		validator.validate(user, result);
//		if (result.hasErrors()) {
//			return "addUserForm";
//		}
		
		String result = "Y";

		try {
			System.out.println("test : "+user.getEmailID());
			
			result = userDao.checkEmailIDExistance(user.getEmailID());
			
		} catch (Exception e) {
			System.out.println("Exception: " + e.getMessage());
			
			result = "error";
		}

		return result;
	}

//	@RequestMapping(method = RequestMethod.GET)
//	public String initializeForm(@ModelAttribute("user") User user) {
//
//		return "addUserForm";
//	}
}