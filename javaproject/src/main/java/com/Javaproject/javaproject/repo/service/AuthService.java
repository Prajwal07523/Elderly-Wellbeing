package com.Javaproject.javaproject.repo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Javaproject.javaproject.models.User;
import com.Javaproject.javaproject.repo.UserRepository;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Check if user already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            // User already exists
            return null;
        }

        // No need to encode password, assuming it's already hashed or encrypted
        return userRepository.save(user);
    }

    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        // Assuming the password is already hashed or encrypted
        if (user != null && user.getPassword().equals(password)) {
            // Passwords match, return user
            return user;
        } else {
            throw new RuntimeException("Invalid email or password"); // Throw an exception for invalid credentials
        }
    }

}
