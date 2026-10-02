# Average REST API

A simple REST API built with Node.js and Express that calculates the average of all numbers received so far.

## Installation

1. Clone the repository:
   ```bash
   git clone <YOUR-GITHUB-REPOSITORY-URL>
   cd ayurtech_Task
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Run the Server

Start the server with:

```bash
npm start
```

Server URL: http://localhost:3000

## API

### POST /average

Accepts a number and returns the average of all numbers received so far.

#### Request

```json
{
  "num": 10
}
```

#### Response

```json
{
  "message": "Average calculated successfully",
  "average": 10
}
```

For example, after sending 10 and 20, the response will be:

```json
{
  "message": "Average calculated successfully",
  "average": 15
}
```

#### Validation & Error Handling

The API accepts only numbers.

For invalid input:

```json
{
  "num": "10"
}
```

The API returns a 400 Bad Request response:

```json
{
  "message": "please enter a vallid number"
}
```

## Testing with Postman

Use the following request in Postman:

- Method: **POST**
- URL: `http://localhost:3000/average`
- Body: Select **raw** -> **JSON** and send:

```json
{
  "num": 10
}
```

## Tests

This project uses **Jest** and **Supertest** for automated testing.

Run the tests with:

```bash
npm test
```

The tests cover:
- Single number
- Multiple numbers
- Invalid input

## Git Hooks

Husky is used to run tests before every commit.
Commitlint is used to enforce Conventional Commit messages.

Example:
- `feat: add average api`
- `fix: fix number validation`
- `test: add average tests`
- `docs: update readme`
- `chore: configure commitlint`

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

## Note

Numbers are stored in memory while the server is running. Restarting the server clears the stored numbers.