# Task API (In-Memory, RESTful, ES Modules)

This is a basic RESTful API built with **Node.js** and **Express.js** using **ES modules**. It manages a collection of tasks (to-do items) stored in memory.

## Features

- CRUD operations for tasks
- Pagination, sorting, and filtering
- Basic validation
- In-memory storage
- Authentication middleware
- Structured using MVC pattern
- Error handling middleware

## Requirements

- Node.js v14+ (with ES module support)

## Installation & Run

1. Install dependencies:

```bash
npm install
```

3. Start the server:

```bash
npm start
```

Server runs on `http://localhost:5000` by default.

## Authentication

Some endpoints require a bearer token. Use the following in headers:

```
Authorization: "Whatever the secret key you use for Authorization"
```

## 📘 API Endpoints

### `GET /tasks`

Retrieve all tasks with optional query params:

### `GET /tasks/:id`

Retrieve a task by ID.

---

### `POST /tasks` _(Protected)_

Create a new task.

**Body:**

```json
{
  "title": "My Task",
  "description": "Some description"
}
```

---

### `PUT /tasks/:id` _(Protected)_

Update an existing task.

**Body:**

```json
{
  "title": "Updated Title",
  "description": "Updated description"
}
```

---

### `DELETE /tasks/:id` _(Protected)_

Delete a task by ID.

---

## Testing With Postman

1. For protected routes, go to **Headers** and add:

```
Key: Authorization
Value: "Secret key"
```

## 🛠 Notes

- Tasks are stored in memory; data is lost on server restart if we wnat to perform the CRUD operation we can use MongoDB as wel for better user experience
- Change the bearer token or authentication logic in `authMiddleware.js`.
