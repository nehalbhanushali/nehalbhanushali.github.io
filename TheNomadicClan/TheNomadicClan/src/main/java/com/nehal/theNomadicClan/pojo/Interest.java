package com.nehal.theNomadicClan.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;


@Entity
@Table(name="interest")
public class Interest {

	
	@Id
	@GeneratedValue
	@Column(name = "interest_id", unique=true, nullable = false)
	private int interestID;
	
	@Column(name ="interest_name")
	private String interestName;
	
	@Transient
	private String createdBy;
	
	
	@Transient
	private String isError;
	
	@Transient
	private String errorMessage;
	
	public Interest(){
		
		
	}


	public int getInterestID() {
		return interestID;
	}


	public void setInterestID(int interestID) {
		this.interestID = interestID;
	}


	public String getInterestName() {
		return interestName;
	}


	public void setInterestName(String interestName) {
		this.interestName = interestName;
	}


	public String getCreatedBy() {
		return createdBy;
	}


	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
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
