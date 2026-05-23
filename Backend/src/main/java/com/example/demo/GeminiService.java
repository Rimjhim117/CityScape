package com.example.demo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.Map;

@Service
public class GeminiService {

    private final WebClient webClient;

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public GeminiService() {
        this.webClient = WebClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com")
                .build();
    }

    public String generateItinerary(String destination, int days, String preferences) {
        String prompt = String.format(
            "You are an expert luxury travel concierge. Create a highly detailed, premium %d-day travel itinerary for %s. " +
            "The traveler's main interests are: %s. " +
            "Format the response in clean Markdown with day-by-day headers ('## Day 1'), breaking down morning, afternoon, and evening sections. " +
            "For each time block, include specific bolded sections for 'Activity', 'Dining', 'Description', and 'Travel Tip' to make it extremely detailed and premium. " +
            "CRITICAL RULES: Output ONLY the itinerary. Do NOT include any introductory apologies, concluding remarks, or ask clarifying questions. " +
            "If the destination is a whole country, intelligently select the best cities/regions that fit the timeframe.",
            days, destination, preferences
        );

        // Construct the expected payload for the Gemini API
        Map<String, Object> requestBody = Map.of(
            "contents", new Object[]{
                Map.of("parts", new Object[]{
                    Map.of("text", prompt)
                })
            }
        );

        try {
            // Make the POST request to the Gemini API
            Map response = webClient.post()
                    .uri("/v1beta/models/gemini-2.5-flash:generateContent?key=" + geminiApiKey)
                    .header("Content-Type", "application/json")
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .block();

            // Parse the response to extract the generated text
            // Note: The response structure is heavily nested. We safely traverse it here.
            if (response != null && response.containsKey("candidates")) {
                java.util.List candidates = (java.util.List) response.get("candidates");
                if (!candidates.isEmpty()) {
                    Map firstCandidate = (Map) candidates.get(0);
                    Map content = (Map) firstCandidate.get("content");
                    java.util.List parts = (java.util.List) content.get("parts");
                    if (!parts.isEmpty()) {
                        Map firstPart = (Map) parts.get(0);
                        return (String) firstPart.get("text");
                    }
                }
            }
            return "Unable to generate itinerary. Please try again later.";
        } catch (Exception e) {
            e.printStackTrace();
            return "An error occurred while connecting to the AI service: " + e.getMessage();
        }
    }
}
