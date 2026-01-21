# Express MVC Product Search 📦

An Express-based Node.js application that implements **product search functionality** using the **MVC (Model–View–Controller)** pattern.  
Users can search for products by name, and results are dynamically rendered using **EJS templates**.

---

## Project Overview

This project demonstrates how to implement a **search feature** in an Express MVC application.  
The search logic is handled in the controller, data is managed through the model, and results are displayed using EJS views.

---

## Features

- Express MVC architecture
- Product search by name
- POST-based search handling
- Dynamic rendering using EJS
- Centralized layout for reusable UI
- Clean separation of model, view, and controller

---

## Tech Stack

- Node.js
- Express.js
- EJS (View Engine)
- HTML, CSS

---
## Actual Project Structure
```
express-mvc-product-search/
│
├── controllers/
│ └── productController.js
│
├── models/
│ └── productModel.js
│
├── views/
│ ├── index.ejs
│ ├── layout.ejs
│ └── searchResults.ejs
│
├── index.js
├── server.js
├── upload_project.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

```


---

## How Product Search Works (MVC Flow)

1. User enters a product name in the search form (present in `layout.ejs`)
2. Form submits a **POST request** to `/search`
3. `search` controller inside `productController.js`:
   - Receives the product name from `req.body`
   - Fetches product data from `productModel.js`
   - Filters products based on the search term
4. Filtered results are passed to `searchResults.ejs`
5. Results are displayed in a user-friendly format

---

## Routes Used

- `GET /` → Renders the home page
- `POST /search` → Handles product search and renders results

---

## Views Description

- **layout.ejs**  
  Contains the common layout and search form used across views

- **index.ejs**  
  Default landing page

- **searchResults.ejs**  
  Displays the filtered product search results

---

## How to Run the Project

```bash
git clone https://github.com/Mrutunjaya-Panda/express-mvc-product-search.git
cd express-mvc-product-search
npm install
npm start

Open in browser:
http://localhost:5000
```

# Learning Outcomes
```
Implementing search functionality in Express

Applying MVC architecture correctly

Handling POST requests in Express

Rendering dynamic data using EJS

Separating concerns using controllers and models
```

# Author ✍️
Mrutunjaya Panda
