package com.nehal.theNomadicClan.pojo;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@SuppressWarnings("serial")
@Entity
@Table(name="user_group")
public class UserGroup implements Serializable{
	
//	 private static final long serialVersionUID = 1L;
	 @Id
	 @ManyToOne
	 @JoinColumn(name="member_user_id")
	 private StandardUser standardUser = new StandardUser();
	 
	 @Id
	 @ManyToOne
	 @JoinColumn(name="travelgroup_id")
	 private TravelGroup travelGroup = new TravelGroup();

	public StandardUser getStandardUser() {
		return standardUser;
	}

	public void setStandardUser(StandardUser standardUser) {
		this.standardUser = standardUser;
	}

	public TravelGroup getTravelGroup() {
		return travelGroup;
	}

	public void setTravelGroup(TravelGroup travelGroup) {
		this.travelGroup = travelGroup;
	}


	 
	 



}
