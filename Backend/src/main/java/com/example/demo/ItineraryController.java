package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/itinerary")
@CrossOrigin(origins = "*") // Allow any frontend to connect during development
public class ItineraryController {

    @Autowired
    private GeminiService geminiService;

    // Define a simple DTO inner class to map the incoming JSON payload
    public static class ItineraryRequest {
        private String destination;
        private int days;
        private String preferences;

        public String getDestination() { return destination; }
        public void setDestination(String destination) { this.destination = destination; }
        public int getDays() { return days; }
        public void setDays(int days) { this.days = days; }
        public String getPreferences() { return preferences; }
        public void setPreferences(String preferences) { this.preferences = preferences; }
    }

    @PostMapping("/generate")
    public ResponseEntity<?> generateItinerary(@RequestBody ItineraryRequest request) {
        
        // Input validation
        if (request.getDestination() == null || request.getDestination().trim().isEmpty()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Destination is required"));
        }
        if (request.getDays() <= 0 || request.getDays() > 14) {
            return ResponseEntity.badRequest().body(Map.of("error", "Days must be between 1 and 14"));
        }

        // Call the service
        String finalPreferences = (request.getPreferences() == null || request.getPreferences().trim().isEmpty()) 
            ? "General sightseeing, popular attractions, and local culture" 
            : request.getPreferences();

        String itineraryMarkdown = geminiService.generateItinerary(
            request.getDestination(), 
            request.getDays(), 
            finalPreferences
        );

        // Return the response
        Map<String, String> response = new HashMap<>();
        response.put("itinerary", itineraryMarkdown);
        return ResponseEntity.ok(response);
    }
}
