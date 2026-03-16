package com.example.demo.entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.*;


@Entity
public class Todo {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String title;
    private boolean completed;

    public Todo() {}

    public Todo(String title, boolean completed) {
        this.title = title;
        this.completed = completed;
    }


    public void setId(Long id) { this.id = id; }

    public Long getId() { return id; }

    public void setTitle(String title) { this.title = title; }

    public String getTitle() { return title; }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }


    public boolean isCompleted() { return completed; }

   
}

