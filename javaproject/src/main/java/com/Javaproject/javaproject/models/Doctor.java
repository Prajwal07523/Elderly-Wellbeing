package com.Javaproject.javaproject.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "doctors")
public class Doctor {
    @Id
    private String id;
    private String title;
    private String domain;
    private String description;
    private Image image;

    // Getters and setters

    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Doctor(String id, String title, String domain, String description, Image image) {
        this.id = id;
        this.title = title;
        this.domain = domain;
        this.description = description;
        this.image = image;
    }

    public String getDomain() {
        return domain;
    }

    public String getDescription() {
        return description;
    }

    public Image getImage() {
        return image;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
