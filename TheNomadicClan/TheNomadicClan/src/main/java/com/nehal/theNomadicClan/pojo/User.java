package com.nehal.theNomadicClan.pojo;

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="user")
@Inheritance(strategy=InheritanceType.JOINED) //table per subclass
public class User {
	
	@Id
	@GeneratedValue
	@Column(name = "user_id", unique=true, nullable = false)
	private int userID;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name ="last_name")
	private String lastName;

	@Column(name = "email_id", unique=true, nullable = false)
	private String emailID;
	
	@Column(name ="password")
	private String password;
	
	@Column(name ="photo_path",columnDefinition="TEXT")
	private String photoPath; // or bytecode of photo
	
	@Column(name ="user_status")
	private String userStatus; // or bytecode of photo
	
	@Column(name ="user_type")
	private String userType; // or bytecode of photo
	
	@Column(name ="user_gender")
	private String gender;
	
	@Column(name = "user_city")
	private String userCity;
	
	@Transient
	private String isError;
	
	@Transient
	private String errorMessage;
	
	
	
    public User(){
		
	}
    
    public User(String emailID, String password) {
        this.emailID = emailID;
        this.password = password;
    }

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailID() {
		return emailID;
	}

	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhotoPath() {
		return photoPath;
	}

	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}
	
	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
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

	public String getUserCity() {
		return userCity;
	}

	public void setUserCity(String userCity) {
		this.userCity = userCity;
	}
	
	
	
    
    

}
