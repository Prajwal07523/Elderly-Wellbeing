package com.Javaproject.javaproject.controller;

import com.Javaproject.javaproject.models.HealthReminder;
import com.Javaproject.javaproject.repo.HealthReminderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/health-reminders")
public class HealthReminderController {

    @Autowired
    private HealthReminderRepository healthReminderRepository;

    @PostMapping
    public HealthReminder addHealthReminder(@RequestBody HealthReminder healthReminder) {
        return healthReminderRepository.save(healthReminder);
    }

    @GetMapping
    public List<HealthReminder> getAllHealthReminders() {
        return healthReminderRepository.findAll();
    }
    
//    @DeleteMapping("/{id}")
//    public void deleteHealthReminderById(@PathVariable String id) {
//        healthReminderRepository.deleteById(id);
//    }

    // You can add more CRUD operations as needed
}
