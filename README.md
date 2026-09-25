# **🍳 Recipe Sharing Platform**

A simple **Recipe Sharing Platform** built using **Spring Boot, MySQL, React, and JavaScript**.  
This application allows users to register, login, add recipes, view recipes, and explore recipe details.

---

## **✨ Features**

- 👤 User Registration and Login
- ➕ Add new recipes
- 📖 View all recipes
- 🔍 View recipe details
- 👨‍🍳 Display recipe author
- 🚪 Logout functionality
- 💾 Store users and recipes in MySQL
- 🔗 REST API integration between React and Spring Boot

---

## **🛠️ Technologies Used**

- Java
- Spring Boot
- Spring Data JPA
- MySQL
- React
- JavaScript
- HTML
- CSS
- REST API
- Git & GitHub

---

## **🚀 How to Run**

### **Backend**

1. Open the Spring Boot project in **Spring Tool Suite / Eclipse**
2. Create a MySQL database named `recipe`
3. Update MySQL username and password in `application.properties`
4. Run the Spring Boot application

Backend runs on:

`http://localhost:8080`

### **Frontend**

1. Open the `recipe-frontend` folder in VS Code
2. Install dependencies:

    npm install

3. Start the React application:

    npm run dev

Frontend runs on:

`http://localhost:5173`

---

## **🔗 API Endpoints**

| Method | Endpoint | Description |
|---|---|---|
| POST | `/users/register` | Register user |
| POST | `/users/login` | Login user |
| POST | `/recipes/add` | Add recipe |
| GET | `/recipes/get` | Get all recipes |
| GET | `/recipes/{id}` | Get recipe by ID |

---

## **📄 Frontend Pages**

- Login
- Register
- Home
- Add Recipe
- Recipe Details

---

## 📁 **Project Structure**

    Recipe Sharing Platform/
    │
    ├── src/
    │   ├── main/
    │   │   ├── java/
    │   │   │   └── com.recipe/
    │   │   │       ├── controller/
    │   │   │       ├── entity/
    │   │   │       ├── repository/
    │   │   │       └── service/
    │   │   │
    │   │   └── resources/
    │   │       └── application.properties
    │   │
    │   └── test/
    │
    ├── recipe-frontend/
    │   ├── src/
    │   │   ├── pages/
    │   │   │   ├── Login.jsx
    │   │   │   ├── Register.jsx
    │   │   │   ├── Home.jsx
    │   │   │   ├── AddRecipe.jsx
    │   │   │   └── RecipeDetails.jsx
    │   │   │
    │   │   ├── App.jsx
    │   │   ├── App.css
    │   │   └── main.jsx
    │   │
    │   ├── package.json
    │   └── vite.config.js
    │
    ├── pom.xml
    └── README.md

---

## **👩‍💻 Author**

**Suhani Kharode**

- Portfolio: https://suhani-kharode-portfolio-l.netlify.app/
- LinkedIn: https://www.linkedin.com/in/suhani-kharode-572738280/
- LeetCode: https://leetcode.com/u/suhani3002/
