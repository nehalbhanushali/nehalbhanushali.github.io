package com.nehal.theNomadicClan.pojo;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="commercial_user")
@PrimaryKeyJoinColumn(name="user_id")
public class CommercialUser extends User{
	
//	@OneToMany(fetch=FetchType.LAZY, mappedBy="provided_deals")
//	private Set<Deal> providedDeals = new HashSet<Deal>();
	

	
	public CommercialUser(){
		
	}


//	public Set<Deal> getProvidedDeals() {
//		return providedDeals;
//	}
//
//
//	public void setProvidedDeals(Set<Deal> providedDeals) {
//		this.providedDeals = providedDeals;
//	}

	
}
