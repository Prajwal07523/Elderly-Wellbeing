package com.Javaproject.javaproject.repo;

import com.Javaproject.javaproject.models.HealthReminder;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HealthReminderRepository extends MongoRepository<HealthReminder, Long> {
	
}