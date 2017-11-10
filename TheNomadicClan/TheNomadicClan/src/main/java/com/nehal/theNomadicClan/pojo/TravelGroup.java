package com.nehal.theNomadicClan.pojo;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.codehaus.jackson.annotate.JsonBackReference;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

@Entity
@Table(name="travelgroup")
public class TravelGroup {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "group_id", unique=true, nullable = false)
	private int groupID;
	
	@Column(name = "group_name")
	private String groupName;
	
	@Column(name = "group_description", columnDefinition="TEXT")
	private String groupDescription;
	
	@Column(name = "group_photo_path",columnDefinition="TEXT")
	private String groupPhotoPath;
	
	
	
	@ManyToMany(mappedBy="groupsJoined")
	@Fetch(value = FetchMode.SUBSELECT)
	    private List<StandardUser> members = new ArrayList<StandardUser>();
    
//	@OneToMany(mappedBy="groupsJoined")
////	@JsonBackReference
//	    private Set<StandardUser> members = new HashSet<StandardUser>();
	
//	 @OneToMany(fetch = FetchType.EAGER, mappedBy = "standardUser", cascade=CascadeType.ALL)
//	 @Fetch(value = FetchMode.SUBSELECT)
//	   private List<UserGroup> userGroupsJoined = new ArrayList<UserGroup>();


	@ManyToOne
	 @JoinColumn(name="user_id")
	@JsonBackReference
	 private StandardUser groupAdmin;
	
	@Transient
	private String groupAdminEmailID;
	
	
	@Transient
	private String userIsMember;
	
	
	@Transient
	private String isError;
	
	@Transient
	private String errorMessage;
	
	
	public TravelGroup(){
		
		
	}


	public int getGroupID() {
		return groupID;
	}


	public void setGroupID(int groupID) {
		this.groupID = groupID;
	}

	public String getGroupDescription() {
		return groupDescription;
	}


	public void setGroupDescription(String groupDescription) {
		this.groupDescription = groupDescription;
	}


	public String getGroupPhotoPath() {
		return groupPhotoPath;
	}


	public void setGroupPhotoPath(String groupPhotoPath) {
		this.groupPhotoPath = groupPhotoPath;
	}

//	public List<UserGroup> getUserGroupsJoined() {
//		return userGroupsJoined;
//	}
//
//
//	public void setUserGroupsJoined(List<UserGroup> userGroupsJoined) {
//		this.userGroupsJoined = userGroupsJoined;
//	}

	

	public StandardUser getGroupAdmin() {
		return groupAdmin;
	}


	public List<StandardUser> getMembers() {
		return members;
	}


	public void setMembers(List<StandardUser> members) {
		this.members = members;
	}


	public void setGroupAdmin(StandardUser groupAdmin) {
		this.groupAdmin = groupAdmin;
	}


	public String getGroupName() {
		return groupName;
	}


	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}


	public String getGroupAdminEmailID() {
		return groupAdminEmailID;
	}


	public void setGroupAdminEmailID(String groupAdminEmailID) {
		this.groupAdminEmailID = groupAdminEmailID;
	}


	public String getUserIsMember() {
		return userIsMember;
	}


	public void setUserIsMember(String userIsMember) {
		this.userIsMember = userIsMember;
	}


	public String getIsError() {
		return isError;
	}


	public void setIsError(String isError) {
		this.isError = isError;
	}


	public String getErrorMessage() {
		return errorMessage;
	}


	public void setErrorMessage(String errorMessage) {
		this.errorMessage = errorMessage;
	}
	
	





	





	

}
