package com.nehal.theNomadicClan.pojo;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.codehaus.jackson.annotate.JsonManagedReference;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;



@Entity
@Table(name="standard_user")
@PrimaryKeyJoinColumn(name="user_id")
public class StandardUser extends User {
	
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy="postCreater")
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Post> postsCreated = new ArrayList<Post>();
	
	@OneToMany(fetch=FetchType.EAGER)
	 @JoinTable(name = "user_interests", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "interest_id"))
	@Fetch(value = FetchMode.SUBSELECT)
	private List<Interest> interests = new ArrayList<Interest>();
	
	
	 @ManyToMany(cascade={CascadeType.ALL})
	    @JoinTable(name="user_posts_tagged",
	        joinColumns={@JoinColumn(name="user_id")},
	        inverseJoinColumns={@JoinColumn(name="post_id")})
		private Set<Post> postsTaggedIn = new HashSet<Post>();
	
	
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy="groupAdmin")
	@JsonManagedReference
	private Set<TravelGroup> groupsOwned = new HashSet<TravelGroup>();
	
	@OneToMany(fetch=FetchType.EAGER, mappedBy="eventCreater")
	private Set<Event> eventsCreated = new HashSet<Event>();
	
	  @ManyToMany(cascade={CascadeType.ALL})
	    @JoinTable(name="user_notifications",
	        joinColumns={@JoinColumn(name="user_id")},
	        inverseJoinColumns={@JoinColumn(name="group_id")})
	  @Fetch(value = FetchMode.SUBSELECT)
		private List<Notifications> notifications = new ArrayList<Notifications>();
	
	  @ManyToMany(cascade={CascadeType.MERGE})
	    @JoinTable(name="user_group",
	        joinColumns={@JoinColumn(name="user_id")},
	        inverseJoinColumns={@JoinColumn(name="group_id")})
	  @Fetch(value = FetchMode.SUBSELECT)
		private List<TravelGroup> groupsJoined = new ArrayList<TravelGroup>();
	  
//	  @OneToMany(mappedBy="travelGroup")
//	  @Fetch(value = FetchMode.SUBSELECT)
//	   private List<UserGroup> userGroupsJoined = new ArrayList<UserGroup>();
	  
	 

	  
	  
	  
	  @ManyToMany(cascade={CascadeType.ALL})
	    @JoinTable(name="user_event",
	        joinColumns={@JoinColumn(name="user_id")},
	        inverseJoinColumns={@JoinColumn(name="event_id")})
		private Set<Event> eventsJoined = new HashSet<Event>();
	  
	  
	

    @ManyToMany(cascade={CascadeType.ALL})
    @JoinTable(name="travel_buddies",
        joinColumns={@JoinColumn(name="user_id")},
        inverseJoinColumns={@JoinColumn(name="buddy_id")})
    @Fetch(value = FetchMode.SUBSELECT)
	private List<StandardUser> travelBuddies = new ArrayList<StandardUser>();
    
    
    @ManyToMany(mappedBy="travelBuddies")
    @Fetch(value = FetchMode.SUBSELECT)
    private List<StandardUser> userBuddies = new ArrayList<StandardUser>();
    
    
    @Transient
    private String isTravelBuddy;
	
//	@OneToMany(fetch=FetchType.LAZY, mappedBy="subscribed_deals")
//	private Set<Deal> subscribedDeals = new HashSet<Deal>();
	
	public StandardUser(){
		
	}


	public Set<Post> getPostsTaggedIn() {
		return postsTaggedIn;
	}



	public void setPostsTaggedIn(Set<Post> postsTaggedIn) {
		this.postsTaggedIn = postsTaggedIn;
	}



	public List<Notifications> getNotifications() {
		return notifications;
	}



	public void setNotifications(List<Notifications> notifications) {
		this.notifications = notifications;
	}



	public Set<Event> getEventsJoined() {
		return eventsJoined;
	}



	public void setEventsJoined(Set<Event> eventsJoined) {
		this.eventsJoined = eventsJoined;
	}



	public List<StandardUser> getTravelBuddies() {
		return travelBuddies;
	}

	public void setTravelBuddies(List<StandardUser> travelBuddies) {
		this.travelBuddies = travelBuddies;
	}



	public List<Post> getPostsCreated() {
		return postsCreated;
	}



	public void setPostsCreated(List<Post> postsCreated) {
		this.postsCreated = postsCreated;
	}







	public List<Interest> getInterests() {
		return interests;
	}







	public void setInterests(List<Interest> interests) {
		this.interests = interests;
	}






//
//	public List<UserGroup> getUserGroupsJoined() {
//		return userGroupsJoined;
//	}
//
//
//
//	public void setUserGroupsJoined(List<UserGroup> userGroupsJoined) {
//		this.userGroupsJoined = userGroupsJoined;
//	}



	public List<TravelGroup> getGroupsJoined() {
		return groupsJoined;
	}


	public void setGroupsJoined(List<TravelGroup> groupsJoined) {
		this.groupsJoined = groupsJoined;
	}


	public Set<Event> getEventsCreated() {
		return eventsCreated;
	}


	public void setEventsCreated(Set<Event> eventsCreated) {
		this.eventsCreated = eventsCreated;
	}


	public List<StandardUser> getUserBuddies() {
		return userBuddies;
	}


	public void setUserBuddies(List<StandardUser> userBuddies) {
		this.userBuddies = userBuddies;
	}
	
	


	public Set<TravelGroup> getGroupsOwned() {
		return groupsOwned;
	}


	public void setGroupsOwned(Set<TravelGroup> groupsOwned) {
		this.groupsOwned = groupsOwned;
	}


	public String getIsTravelBuddy() {
		return isTravelBuddy;
	}


	public void setIsTravelBuddy(String isTravelBuddy) {
		this.isTravelBuddy = isTravelBuddy;
	}



    

	
	
	


//	public Set<Deal> getSubscribedDeals() {
//		return subscribedDeals;
//	}
//
//
//	public void setSubscribedDeals(Set<Deal> subscribedDeals) {
//		this.subscribedDeals = subscribedDeals;
//	}
//	
	
	
	
	
	
	

}
