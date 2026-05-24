package com.example.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/checkout")
@CrossOrigin(origins = "*")
public class CheckoutController {

    @PostMapping
    public ResponseEntity<?> processCheckout(@RequestBody CheckoutRequest request) {
        // Here we would typically validate the cart items, calculate the actual total,
        // and process a real payment through Stripe or another gateway.
        // For this prototype, we simulate a successful transaction.

        System.out.println("Received checkout request for total: $" + request.getTotal());
        System.out.println("Number of items: " + request.getItems().size());

        // Simulate processing delay
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Order processed successfully",
                "orderId", "ORD-" + System.currentTimeMillis()
        ));
    }

    public static class CheckoutRequest {
        private List<Object> items;
        private double total;

        public List<Object> getItems() { return items; }
        public void setItems(List<Object> items) { this.items = items; }

        public double getTotal() { return total; }
        public void setTotal(double total) { this.total = total; }
    }
}
