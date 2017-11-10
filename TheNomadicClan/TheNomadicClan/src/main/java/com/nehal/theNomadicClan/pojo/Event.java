package com.nehal.theNomadicClan.pojo;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="event")
public class Event {
	
	@Id
	@GeneratedValue
	@Column(name = "event_id", unique=true, nullable = false)
	private String eventID;
	
	@Column(name = "event_title")
	private String eventTitle;
	
//	@Column(name = "event_schedule")
//    private Schedule eventSchedule; //start end?

	//participntUsers;
	@Column(name = "event_details")
	private String eventDetails;
	
	@Column(name = "event_status")
	private String eventStatus;
	
	
	@ManyToMany(mappedBy="eventsJoined")
    private Set<StandardUser> eventParticipants = new HashSet<StandardUser>();
	
	 @ManyToOne
	 @JoinColumn(name="user_id")
	 private StandardUser eventCreater;
	 
	
	
	@Transient
	private String eventCreaterEmailID;
	
	public Event(){
		
		
	}

	public String getEventID() {
		return eventID;
	}

	public void setEventID(String eventID) {
		this.eventID = eventID;
	}

	public String getEventTitle() {
		return eventTitle;
	}

	public void setEventTitle(String eventTitle) {
		this.eventTitle = eventTitle;
	}

//	public Schedule getEventSchedule() {
//		return eventSchedule;
//	}
//
//	public void setEventSchedule(Schedule eventSchedule) {
//		this.eventSchedule = eventSchedule;
//	}

	public String getEventDetails() {
		return eventDetails;
	}

	public void setEventDetails(String eventDetails) {
		this.eventDetails = eventDetails;
	}

	public String getEventStatus() {
		return eventStatus;
	}

	public void setEventStatus(String eventStatus) {
		this.eventStatus = eventStatus;
	}

	public Set<StandardUser> getEventParticipants() {
		return eventParticipants;
	}

	public void setEventParticipants(Set<StandardUser> eventParticipants) {
		this.eventParticipants = eventParticipants;
	}

	public StandardUser getEventCreater() {
		return eventCreater;
	}

	public void setEventCreater(StandardUser eventCreater) {
		this.eventCreater = eventCreater;
	}

	public String getEventCreaterEmailID() {
		return eventCreaterEmailID;
	}

	public void setEventCreaterEmailID(String eventCreaterEmailID) {
		this.eventCreaterEmailID = eventCreaterEmailID;
	}
	
	
	
	
}
