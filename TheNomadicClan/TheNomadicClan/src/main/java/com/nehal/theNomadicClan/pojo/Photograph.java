package com.nehal.theNomadicClan.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="photo")
public class Photograph {
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name = "photo_id", unique=true, nullable = false)
	private int photoID;
	
	@Column(name = "photo_title")
	private String photoText;
	
	
	@Column(name = "photograph_path")
	private String photographPath;


	public int getPhotoID() {
		return photoID;
	}


	public void setPhotoID(int photoID) {
		this.photoID = photoID;
	}


	public String getPhotoText() {
		return photoText;
	}


	public void setPhotoText(String photoText) {
		this.photoText = photoText;
	}


	public String getPhotographPath() {
		return photographPath;
	}


	public void setPhotographPath(String photographPath) {
		this.photographPath = photographPath;
	} 
	
	
	
	
	

}
