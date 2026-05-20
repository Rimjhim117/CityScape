#  CityScape — Marketplace for Local Goods

**Premium Global Discovery & Local Commerce Platform**

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-purple.svg)](https://vitejs.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.4.0-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A modern, full-stack marketplace platform connecting travelers with unique global destinations, local cultures, and authentic local goods.

---

## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

##  Overview

**CityScape** is a beautifully designed, responsive web application that reimagines how users explore the world. From the vibrant streets of Tokyo to the romantic canals of Venice, CityScape provides an immersive UI/UX that blends rich photography with practical local shopping features.

The platform is powered by a high-performance **React** frontend using Vite, backed by a robust **Spring Boot** REST API handling user authentication and persistent sessions.

---

##  Architecture

```text
┌─────────────────────────┐
│     Client Browser      │  (React.js + Tailwind CSS)
└───────────┬─────────────┘
            │
            ▼  HTTP / REST API
┌─────────────────────────┐
│  Spring Boot Backend    │  (AuthRestController, JPA)
└───────────┬─────────────┘
            │
            ▼  JDBC / Hibernate
┌─────────────────────────┐
│   H2 In-Memory Data     │  (Users Table)
└─────────────────────────┘
```

---

##  Features

### Immersive UI/UX Design
- **Glassmorphism**: Premium frosted-glass UI elements overlaying rich photography.
- **Dynamic Routing**: Instant navigation across continents (Europe, Asia, Oceania) and individual countries.
- **Micro-Animations**: Smooth hover effects, scaling cards, and blob background animations.

### Secure User Authentication
- **RESTful Login/Signup**: Fast and responsive backend communication.
- **Persistent Sessions**: Secure `localStorage` integration keeps users logged in across the platform.
- **Dynamic Navigation**: Navbar seamlessly transforms to show "Profile" and "Logout" states.

###  Local Commerce Integration
- **Cultural Exploration**: Discover top cities, famous landmarks, and regional highlights.
- **Local Goods**: Explore curated authentic products tied directly to specific global regions.

---

## Tech Stack

```text
Frontend       : React 18, Vite, TypeScript
Styling        : Tailwind CSS
Icons          : Lucide-React
Routing        : React Router DOM (v6)

Backend        : Spring Boot 3.4.0 (Java 17)
Database       : H2 In-Memory Database (zero-config)
ORM            : Spring Data JPA / Hibernate
Build Tool     : Maven Wrapper (mvnw)
```

---

##  Installation

### Prerequisites
- **Node.js** (v18+)
- **Java** (JDK 17+)
- **Maven** (Optional, project includes `mvnw` wrapper)

### 1. Start the Backend (Spring Boot)

```bash
# Clone the repository
git clone https://github.com/Rimjhim117/Market-Place-for-Local-Goods.git
cd Market-Place-for-Local-Goods

# Navigate to the Backend folder
cd Backend

# Run the Spring Boot server using the Maven wrapper
.\mvnw spring-boot:run
```
*The API will start automatically on `http://localhost:8080`.*

### 2. Start the Frontend (React)

Open a **new terminal window**:

```bash
# Navigate to the frontend folder
cd frontend

# Install all JavaScript dependencies
npm install

# Start the Vite development server
npm run dev
```
*The website will be available at `http://localhost:5173`.*

---

## 🚀 Usage

### Platform Flow

1. **Explore Destinations**: Navigate to `http://localhost:5173/explore` to view the continent directory.
2. **Select a Country**: Click on any country (e.g., France, Japan, Australia) to see its immersive page.
3. **Sign Up**: Click the "Sign Up" button to create an account. The React app will send your details to the Spring Boot backend.
4. **View Profile**: Once logged in, visit the `/profile` page to view your active session details.

---

##  API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Authenticate an existing user |

### POST `/api/auth/signup`
**Payload:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 555-0000",
  "password": "securepassword123"
}
```

---

## 📁 Project Structure

```text
MarketPlace/
├── frontend/                     # React Application
│   ├── src/
│   │   ├── components/           # Navbar, Footer, UI Cards
│   │   ├── pages/                # Signup, Login, Profile, Home, Explore
│   │   └── App.tsx               # Application Router
│   ├── index.html
│   └── package.json
│
├── Backend/                      # Spring Boot Application
│   ├── src/main/java/.../demo/   
│   │   ├── AuthRestController.java  # API Endpoints
│   │   ├── User.java                # JPA Entity Model
│   │   └── UserRepository.java      # Database access layer
│   ├── src/main/resources/
│   │   └── application.properties   # H2 Database configuration
│   └── pom.xml
│
├── .gitignore
└── README.md
```

---

## 🔧 Configuration

### Database Settings (`Backend/src/main/resources/application.properties`)

By default, the project runs on an **H2 in-memory database** for instant, zero-configuration local development.

```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.hibernate.ddl-auto=update
```

*(To use MySQL in production, simply swap the `spring.datasource.url` to your MySQL cluster).*

---

Developed by:
- **Rimjhim** — [@Rimjhim117](https://github.com/Rimjhim117)

---

##  License

MIT License — see [LICENSE](LICENSE) for details.

---

<div align="center">
Made with ❤️ for Global Explorers
</div>
