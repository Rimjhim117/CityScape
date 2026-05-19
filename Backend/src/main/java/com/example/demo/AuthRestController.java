package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Allow any frontend to connect during development
public class AuthRestController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        
        // Check if user already exists
        if (userRepository.findByEmail(user.getEmail()) != null) {
            response.put("error", "Email already in use");
            return ResponseEntity.badRequest().body(response);
        }

        // Save the user (In production, hash the password before saving!)
        userRepository.save(user);
        
        response.put("message", "User registered successfully");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {
        Map<String, String> response = new HashMap<>();
        
        User user = userRepository.findByEmail(loginRequest.getEmail());
        
        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            // Login successful
            response.put("message", "Login successful");
            response.put("email", user.getEmail());
            return ResponseEntity.ok(response);
        } else {
            // Login failed
            response.put("error", "Invalid email or password");
            return ResponseEntity.status(401).body(response);
        }
    }
}
