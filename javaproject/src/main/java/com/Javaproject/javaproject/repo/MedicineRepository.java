package com.Javaproject.javaproject.repo;

import com.Javaproject.javaproject.models.Medicine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicineRepository extends MongoRepository<Medicine, String> {
    // You can define custom methods for specific queries if needed
}
