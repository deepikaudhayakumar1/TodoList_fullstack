package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Todo;
import com.example.demo.repository.TodoRepository;



@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoRepository repo;

   @GetMapping
    public List<Todo> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Todo create(@RequestBody Todo todo) {
        return repo.save(todo);
    }

     @PutMapping("/{id}")
    public Todo update(@PathVariable Long id, @RequestBody Todo todo) {
        todo.setId(id);
        return repo.save(todo);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
    
}
