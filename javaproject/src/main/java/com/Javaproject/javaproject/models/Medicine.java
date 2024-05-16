package com.Javaproject.javaproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "medicines")
public class Medicine {
    @Id
    private String id;
    private String name;
    private int quantity;
    private String doseLevel;
	public Medicine(String id, String name, int quantity, String doseLevel) {
		super();
		this.id = id;
		this.name = name;
		this.quantity = quantity;
		this.doseLevel = doseLevel;
	}
	public Medicine() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getDoseLevel() {
		return doseLevel;
	}
	public void setDoseLevel(String doseLevel) {
		this.doseLevel = doseLevel;
	}


	
}
