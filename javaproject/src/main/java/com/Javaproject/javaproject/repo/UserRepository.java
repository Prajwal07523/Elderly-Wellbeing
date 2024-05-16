package com.Javaproject.javaproject.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Javaproject.javaproject.models.User;

public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);
}
