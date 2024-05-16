package com.Javaproject.javaproject.repo;

import com.Javaproject.javaproject.models.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AppointmentRepository extends MongoRepository<Appointment, String> {
    // You can define custom query methods here if needed
}
