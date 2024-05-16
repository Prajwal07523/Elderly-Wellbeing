package com.Javaproject.javaproject.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Javaproject.javaproject.models.Doctor;

public interface DoctorRepository extends MongoRepository<Doctor, String> {

}
