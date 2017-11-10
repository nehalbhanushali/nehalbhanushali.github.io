package com.nehal.theNomadicClan.pojo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="notifications")
public class Notifications {
	
	
	@Id
	@GeneratedValue
	@Column(name = "notification_id", unique=true, nullable = false)
	private int notificationID;
	
	@Column(name = "notification_title")
	private String notificationTitle;
	
	@Column(name = "notification_status")
	private String notificationStatus;
	
	@Column(name = "notification_content")
	private String notificationContent;
	
	
	@ManyToMany(mappedBy="notifications")
	    private Set<StandardUser> recievers = new HashSet<StandardUser>();
	
	@Transient
    private Set<StandardUser> readBy = new HashSet<StandardUser>();
	
	@Transient
	private String isError;
	
	@Transient
	private String errorMessage;
	
    public Notifications(){
		
	}

	public int getNotificationID() {
		return notificationID;
	}

	public void setNotificationID(int notificationID) {
		this.notificationID = notificationID;
	}

	public String getNotificationTitle() {
		return notificationTitle;
	}

	public void setNotificationTitle(String notificationTitle) {
		this.notificationTitle = notificationTitle;
	}

	public String getNotificationStatus() {
		return notificationStatus;
	}

	public void setNotificationStatus(String notificationStatus) {
		this.notificationStatus = notificationStatus;
	}

	public String getNotificationContent() {
		return notificationContent;
	}

	public void setNotificationContent(String notificationContent) {
		this.notificationContent = notificationContent;
	}

	public Set<StandardUser> getReadBy() {
		return readBy;
	}

	public void setReadBy(Set<StandardUser> readBy) {
		this.readBy = readBy;
	}

	public Set<StandardUser> getRecievers() {
		return recievers;
	}

	public void setRecievers(Set<StandardUser> recievers) {
		this.recievers = recievers;
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
