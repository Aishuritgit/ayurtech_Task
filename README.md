# Average REST API

A simple REST API built with Node.js and Express that calculates the running average of all numbers received so far.

---

## Table of Contents
- [Installation](#installation)
- [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Git Hooks & Commit Guidelines](#git-hooks--commit-guidelines)
- [Project Structure](#project-structure)
- [Important Notes](#important-notes)

---

## Installation

1. **Clone the repository:**
   ```bash
   git clone <YOUR-GITHUB-REPOSITORY-URL>
   cd ayurtech_Task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## Running the Server

Start the development server with:

```bash
npm start
```

* **Server URL:** `http://localhost:3000`

---

## API Documentation

### **POST /average**
Accepts a number and returns the updated average of all numbers received since the server started.

#### **Request**
* **URL:** `http://localhost:3000/average`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Body:**
  ```json
  {
    "num": 10
  }
  ```

#### **Response (Success - 200 OK)**
```json
{
  "message": "Average calculated successfully",
  "average": 10
}
```

*Example:* After sending `10` and subsequently sending `20`, the response will be:
```json
{
  "message": "Average calculated successfully",
  "average": 15
}
```

#### **Validation & Error Handling**
The API strictly accepts numeric values. If non-number types (e.g., strings) are passed:

**Invalid Request:**
```json
{
  "num": "10"
}
```

**Response (Error - 400 Bad Request):**
```json
{
  "error": "Invalid input. 'num' must be a valid number."
}
```

---

## Testing

### **Testing with Postman**
1. Set HTTP method to **POST**.
2. Enter URL: `http://localhost:3000/average`
3. Go to **Body** -> **raw** -> select **JSON**.
4. Pass payload:
   ```json
   {
     "num": 10
   }
   ```

### **Automated Tests**
This project uses **Jest** and **Supertest** for automated test coverage. Run the test suite using:

```bash
npm test
```

**Test Coverage Includes:**
- Single number input
- Multiple cumulative inputs
- Validation for non-numeric/invalid inputs

---

## Git Hooks & Commit Guidelines

* **Husky:** Automatically executes test scripts (`npm test`) prior to every git commit.
* **Commitlint:** Enforces strict adherence to standard [Conventional Commits](https://www.conventionalcommits.org/).

**Valid Commit Examples:**
* `feat: add average api`
* `fix: fix number validation`
* `test: add average tests`
* `docs: update readme`
* `chore: configure commitlint`

---

## Project Structure

```text
ayurtech_Task/
│
├── .husky/
│   ├── _
│   ├── pre-commit
│   └── commit-msg
│
├── controllers/
│   └── avgController.js
│
├── middleware/
│   └── validateNumber.js
│
├── models/
│   └── avgModel.js
│
├── routes/
│   └── avgRoutes.js
│
├── tests/
│   └── average.test.js
│
├── .gitignore
├── commitlint.config.js
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

---

## Important Notes

> **In-Memory Storage:** Stored numbers are kept in memory while the server process is active. Restarting or stopping the server will reset the calculation history.