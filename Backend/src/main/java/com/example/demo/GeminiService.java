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
            "CRITICAL RULES: Do NOT include any apologies or generic AI filler. " +
            "If the destination is a country, provide a multi-city tour. If it is a specific city, focus only on that city. " +
            "You MUST format the itinerary EXACTLY using this Markdown structure:\n\n" +
            "As your dedicated luxury travel concierge, I have curated this highly detailed premium itinerary for %s, designed specifically around your preferences. Prepare for an unforgettable journey.\n\n" +
            "---\n\n" +
            "**Traveler's Interests:** %s\n\n" +
            "**Premium Hotel Suggestions:** [List 2-3 ultra-luxury, iconic hotels suitable for this destination]\n\n" +
            "**A Note on Reservations:** For all premium dining experiences, luxury accommodations, and private tours, **advance reservations are absolutely essential**. Your dedicated concierge service can assist with securing these coveted bookings.\n\n" +
            "---\n\n" +
            "### **Day [X]: [Title]**\n\n" +
            "**Morning ([Theme])**\n" +
            "*   **Activity:** [Description]\n" +
            "*   **Dining:** [Description]\n" +
            "*   **Description:** [Description]\n\n" +
            "**Afternoon ([Theme])**\n" +
            "*   **Activity:** [Description]\n" +
            "*   **Dining:** [Description]\n" +
            "*   **Description:** [Description]\n\n" +
            "**Evening ([Theme])**\n" +
            "*   **Activity:** [Description]\n" +
            "*   **Dining:** [Description]\n" +
            "*   **Description:** [Description]\n\n" +
            "*   **Travel Tip:** [Description]\n\n" +
            "Do not deviate from this exact bulleted format. Always use the asterisks exactly as shown.",
            days, destination, preferences, destination, preferences
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
