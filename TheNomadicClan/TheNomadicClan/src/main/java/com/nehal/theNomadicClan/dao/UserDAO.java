package com.nehal.theNomadicClan.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Restrictions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.nehal.theNomadicClan.pojo.CommercialUser;
import com.nehal.theNomadicClan.pojo.Interest;
import com.nehal.theNomadicClan.pojo.Notifications;
import com.nehal.theNomadicClan.pojo.Post;
import com.nehal.theNomadicClan.pojo.StandardUser;
import com.nehal.theNomadicClan.pojo.TravelGroup;
import com.nehal.theNomadicClan.pojo.User;
import com.nehal.theNomadicClan.pojo.UserGroup;



public class UserDAO extends DAO {
	private final Logger logger = LoggerFactory.getLogger(UserDAO.class);
//	 static Logger logger = Logger.getLogger(UserDAO.class);
    public UserDAO() {
    }

    public String checkEmailIDExistance(String emailID)
             {
    	
    	System.out.println(" email "+emailID);
    	String exists ="Y";
        try {
            begin();
            Query q = getSession().createQuery("from User where emailID = :emailID");
            q.setString("emailID", emailID);
            User user = (User) q.uniqueResult();
            commit();
            if(user== null){
            	exists = "N";
            }else{
            	exists = "Y";
            }
            return exists;
        } catch (HibernateException e) {
            rollback();
           System.out.println("exception "+e.getMessage()); 
           return "error";
          //  throw new Exception("Could not get user " + username, e);
        }
    }

    public User loginUser(String emailID, String password)
    {
    	logger.info(" ["+Thread.currentThread().getStackTrace()[1].getMethodName()+"]","DAO input"+ emailID);
//    	System.err.println("login Dao "+emailID);
try {
   begin();
   Criteria crit = getSession().createCriteria(User.class);
   crit.add(Restrictions.eq("emailID",emailID));
   crit.add(Restrictions.eq("password",password));
  
  User user = (User) crit.uniqueResult();
   commit();
  return user;
  
} catch (HibernateException e) {
   rollback();
  
   logger.info(" ["+Thread.currentThread().getStackTrace()[1].getMethodName()+"]","Exception"+ e);	

 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    
    public ArrayList<StandardUser> getAllTravellers()
    {

try {
   begin();
   Criteria crit = getSession().createCriteria(User.class);
   crit.add(Restrictions.eq("userStatus","Active"));
   crit.add(Restrictions.eq("userType","Standard"));

  
   ArrayList<StandardUser> users = (ArrayList<StandardUser>) crit.list();
   
//   System.out.print(users.get(0).getFirstName()); 
   commit();
  return users;
  
} catch (HibernateException e) {
   rollback();
  System.err.println("<<<<<< exception "+e.getMessage()); 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    public ArrayList<Notifications> getAllNotifications()
    {

try {
   begin();
   Criteria crit = getSession().createCriteria(Notifications.class);

  
   ArrayList<Notifications> notifications = (ArrayList<Notifications>) crit.list();
   
//   System.out.print(users.get(0).getFirstName()); 
   commit();
  return notifications;
  
} catch (HibernateException e) {
   rollback();
  System.err.println("<<<<<< exception "+e.getMessage()); 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    
    public ArrayList<TravelGroup> getAllGroups()
    {

try {
   begin();
   Criteria crit = getSession().createCriteria(TravelGroup.class);

  
   ArrayList<TravelGroup> travelGroups = (ArrayList<TravelGroup>) crit.list();
   
//   System.out.print(users.get(0).getFirstName()); 
   commit();
  return travelGroups;
  
} catch (HibernateException e) {
   rollback();
  System.err.println("<<<<<< exception "+e.getMessage()); 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    
    
    
    public ArrayList<Interest> getAllInterestsLike(String key)
    {

try {
   begin();
   Criteria crit = getSession().createCriteria(Interest.class);
   crit.add(Restrictions.ilike("interestName", key, MatchMode.ANYWHERE));

  
   ArrayList<Interest> interests = (ArrayList<Interest>) crit.list();
   
//   System.out.print(users.get(0).getFirstName()); 
   commit();
  return interests;
  
} catch (HibernateException e) {
   rollback();
  System.err.println("<<<<<< exception "+e.getMessage()); 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    public ArrayList<Interest> getAllInterests()
    {

try {
   begin();
   Criteria crit = getSession().createCriteria(Interest.class);

  
   ArrayList<Interest> interests = (ArrayList<Interest>) crit.list();
   
//   System.out.print(users.get(0).getFirstName()); 
   commit();
  return interests;
  
} catch (HibernateException e) {
   rollback();
  System.err.println("<<<<<< exception "+e.getMessage()); 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    
    public User create( User user)
    {
try {
    begin();
    System.err.println("inside DAO");
    User registeredUser=null; 
     
    
    if(user.getUserType().equals("Standard")){
    	
    	 registeredUser=new StandardUser();
    	 

    	
    }else if(user.getUserType().equals("Commercial")){
    	 registeredUser=new CommercialUser();
    	
       
    }
    
    registeredUser.setFirstName(user.getFirstName());
    registeredUser.setLastName(user.getLastName());
    registeredUser.setGender(user.getGender());
    registeredUser.setEmailID(user.getEmailID());
    registeredUser.setPassword(user.getPassword());
    registeredUser.setPhotoPath("resources/img/default-profile-pic-"+user.getGender()+".png");
    registeredUser.setUserType(user.getUserType());
    
    
    registeredUser.setUserStatus("Active");
    getSession().save(registeredUser);
    
   
    commit();
    return registeredUser;
    
    
    

    

   
} catch (HibernateException e) {
    rollback();
    return null;
    //throw new MyException("Could not create user " + username, e);
    //throw new MyException("Exception while creating user: " + e.getMessage());
}
}


    public User updateUser(User user)
            {
        try {
            begin();
            getSession().update(user);
           
            commit();
//            close();
            user.setIsError("N");
            user.setErrorMessage("Success");
            return user;
        } catch (HibernateException e) {
            rollback();
            
            e.printStackTrace();
            
            user.setIsError("Y");
            user.setErrorMessage(e.getLocalizedMessage());
            return user;
            //throw new MyException("Could not delete user " + user.getFirstName(), e);
        }
    }
    
    public void delete(User user)
            {
        try {
            begin();
            getSession().delete(user);
            commit();
        } catch (HibernateException e) {
            rollback();
            //throw new MyException("Could not delete user " + user.getFirstName(), e);
        }
    }
    
    public User get(String emailID)
        {
        try {
            begin();
            Criteria crit = getSession().createCriteria(User.class);
            crit.add(Restrictions.eq("emailID",emailID));
            User user = (User) crit.uniqueResult();
            commit();
            System.out.println("user is hereee "+user.getFirstName());
            return user;
        } catch (HibernateException e) {
            rollback();
            
            return null;
//            throw new AdException("Could not get user " + username, e);
        }
    }
   
    
    
   /////////////////////       group   /////////////////////////
    
    
    public TravelGroup updateGroup(TravelGroup group)
    {
try {
    begin();
    getSession().update(group);
   
    commit();
//    close();
    group.setIsError("N");
    group.setErrorMessage("Success");
    return group;
} catch (HibernateException e) {
    rollback();
    
    e.printStackTrace();
    
    group.setIsError("Y");
    group.setErrorMessage(e.getLocalizedMessage());
    return group;
    //throw new MyException("Could not delete user " + user.getFirstName(), e);
}
}
    
    
    public TravelGroup get(int groupID)
    {
    try {
        begin();
        Criteria crit = getSession().createCriteria(TravelGroup.class);
        crit.add(Restrictions.eq("groupID",groupID));
        TravelGroup group = (TravelGroup) crit.uniqueResult();
        commit();
        
      
        return group;
    } catch (HibernateException e) {
        rollback();
       
        return null;
//        throw new AdException("Could not get user " + username, e);
    }
}
   
    public Interest getInterest(String intName)
    {
    try {
        begin();
        Criteria crit = getSession().createCriteria(Interest.class);
        crit.add(Restrictions.eq("interestName",intName));
        Interest interest = (Interest) crit.uniqueResult();
        commit();
        
      
        return interest;
    } catch (HibernateException e) {
        rollback();
       
        return null;
//        throw new AdException("Could not get user " + username, e);
    }
}
    
    
    public TravelGroup createGroup(TravelGroup group, User user)
    {
    	
    	TravelGroup createdGroup=new TravelGroup();
try {
  

    begin();
     

    createdGroup.setGroupName(group.getGroupName());
    createdGroup.setGroupDescription(group.getGroupDescription());
    createdGroup.setGroupPhotoPath(group.getGroupPhotoPath());
//createdGroup.getUserGroupsJoined().add(arg0)
   createdGroup.setGroupAdmin((StandardUser)user);
   
    getSession().save(createdGroup);
 
    
   
    commit();
    
   
  
//    return null;
     createdGroup.setIsError("N");
    return createdGroup;
    

   
} catch (HibernateException e) {
    rollback();
   e.printStackTrace();
   
  createdGroup.setIsError("Y");
  createdGroup.setErrorMessage(e.getLocalizedMessage());
  
    return createdGroup;
    //throw new MyException("Could not create user " + username, e);
    //throw new MyException("Exception while creating user: " + e.getMessage());
}
}
   
    public UserGroup createUserInGroup( StandardUser user, TravelGroup group)
    {
try {
    begin();
    System.err.println("inside DAO");
    UserGroup userGroup =new UserGroup();

    
    userGroup.setStandardUser(user);
    userGroup.setTravelGroup(group);
   
  
    getSession().save(userGroup);
    
   
    commit();
    return userGroup;
    
    
    

    

   
} catch (HibernateException e) {
    rollback();
    return null;
    //throw new MyException("Could not create user " + username, e);
    //throw new MyException("Exception while creating user: " + e.getMessage());
}
}
    
    
    
    public Interest createInterest( Interest interest)
    {
try {
    begin();
    System.err.println("inside DAO");
  
  
    getSession().save(interest);
    
   
    commit();
    
   interest.setIsError("N");
    return interest;
    
   
} catch (HibernateException e) {
    rollback();
    interest.setIsError("Y");
    interest.setErrorMessage(e.getLocalizedMessage());
    return interest;
    //throw new MyException("Could not create user " + username, e);
    //throw new MyException("Exception while creating user: " + e.getMessage());
}
}
    
    
    public Notifications createNotification( Notifications notifications)
    {
try {
    begin();
//    System.err.println("inside DAO");
  
  
    getSession().save(notifications);
    
   
    commit();
    
    notifications.setIsError("N");
    return notifications;
    
   
} catch (HibernateException e) {
    rollback();
    notifications.setIsError("Y");
    notifications.setErrorMessage(e.getLocalizedMessage());
    return notifications;
    //throw new MyException("Could not create user " + username, e);
    //throw new MyException("Exception while creating user: " + e.getMessage());
}
}
    
    /////////////////////////////// post /////////////////////////////////
    
    
    public Post createPost(Post post, User user)
    {
    	
    	 Post createdPost=new Post(); 
try {
  

    begin();
   

    createdPost.setPostText(post.getPostText());
    createdPost.setPostPhoto(post.getPostPhoto());
//createdGroup.getUserGroupsJoined().add(arg0)
    createdPost.setPostCreater((StandardUser)user);
   
    getSession().save(createdPost);
 
   
   
    commit();
    createdPost.setIsError("N");
  
   
    

   
} catch (HibernateException e) {
    rollback();
//   e.printStackTrace();
    createdPost.setIsError("Y");
    createdPost.setErrorMessage(e.getLocalizedMessage());
    //throw new MyException("Could not create user " + username, e);
    //throw new MyException("Exception while creating user: " + e.getMessage());
}

return createdPost;
}
    
 
    
    public List<Post> getMyPosts(User user)
    {

try {
   begin();
   
   
   Query getPostsQuery = getSession().createQuery("from Post where postCreater=:postCreater order by postDate desc");  
//   Query getPostsQuery = getSession().createQuery("from Post");  
   getPostsQuery.setEntity("postCreater",(StandardUser) user);
   List<Post> posts = getPostsQuery.list();
   
   
//   List<PostAlias> postsRes = getSession().createCriteria(Post.class)
//		   .createAlias("Post", "PostAlias")
//		   .setProjection( Projections.projectionList()
//		                    .add( Projections.property("PostAlias.postText"), "postText" )
//		                    .add( Projections.property("PostAlias.postPhoto"), "postPhoto" )
//		           )
//		           .setResultTransformer( Transformers.aliasToBean(PostAlias.class) )
//		           .list();
  

   
//   System.out.print(users.get(0).getFirstName()); 
   commit();
  return posts;
  
} catch (HibernateException e) {
   rollback();
  System.err.println("<<<<<< exception "+e.getMessage()); 
  return null;
 //  throw new Exception("Could not get user " + username, e);
}
}
    
}