package com.Javaproject.javaproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="health-reminder")
public class HealthReminder {
     @Id
    private String id;
    private String name;
    private String timing;

    // Constructors, Getters, and Setters

    public HealthReminder() {
    }

    public HealthReminder(String name, String timing) {
        this.name = name;
        this.timing = timing;
    }

    // Getters and Setters

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

    public String getTiming() {
        return timing;
    }

    public void setTiming(String timing) {
        this.timing = timing;
    }
}