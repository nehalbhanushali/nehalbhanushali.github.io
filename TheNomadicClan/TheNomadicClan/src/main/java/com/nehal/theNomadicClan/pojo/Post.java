package com.nehal.theNomadicClan.pojo;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

@Entity
@Table(name="post")
public class Post {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "post_id", unique=true, nullable = false)
	private int postID;
	
	@Column(name = "post_text")
	private String postText;
	
	@Column(name = "post_photo", columnDefinition="TEXT")
	private String postPhoto;

	
	
	@Column(name = "post_type")
	private String postType; // for bootstrap icon
	
	
	@Column(name = "post_created_date")
	@Temporal(TemporalType.TIMESTAMP)
	private Date postDate = new Date();
	
	
	
	 @ManyToOne(fetch=FetchType.LAZY)
	 @JoinColumn(name="user_id")
	 private StandardUser postCreater;
	 
	
	
	@Transient
	private String postCreaterEmailID;
	
	
	@Transient
	private String isError;
	
	@Transient
	private String errorMessage;
	
	
	public Post(){
		
		
	}


	public int getPostID() {
		return postID;
	}


	public void setPostID(int postID) {
		this.postID = postID;
	}


	public String getPostText() {
		return postText;
	}


	public void setPostText(String postText) {
		this.postText = postText;
	}



	public String getPostType() {
		return postType;
	}


	public void setPostType(String postType) {
		this.postType = postType;
	}





	public StandardUser getPostCreater() {
		return postCreater;
	}


	public void setPostCreater(StandardUser postCreater) {
		this.postCreater = postCreater;
	}


	public String getPostCreaterEmailID() {
		return postCreaterEmailID;
	}


	public void setPostCreaterEmailID(String postCreaterEmailID) {
		this.postCreaterEmailID = postCreaterEmailID;
	}


	public String getPostPhoto() {
		return postPhoto;
	}


	public void setPostPhoto(String postPhoto) {
		this.postPhoto = postPhoto;
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


	public Date getPostDate() {
		return postDate;
	}


	public void setPostDate(Date postDate) {
		this.postDate = postDate;
	}
	
	

}
