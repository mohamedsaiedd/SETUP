# Students Management API

A NestJS-based REST API for managing students and teachers with built-in validation, Swagger documentation, and comprehensive CRUD operations.

## 📋 Description

This is a backend API built with [NestJS](https://nestjs.com/) that provides endpoints for managing students and teachers. The API includes:

- ✅ Full CRUD operations for students
- ✅ Input validation using class-validator
- ✅ Interactive API documentation with Swagger UI
- ✅ Type-safe TypeScript implementation
- ✅ RESTful API design

## 🚀 Features

### Students Module
- Create new students with validation
- Retrieve all students
- Get student by ID
- Update student information
- Delete students

### Validation
- Name: Required, non-empty string
- Age: Required, integer between 5-100
- Class: Required, non-empty string
- Teacher ID: Required, valid UUID format

### API Documentation
- Interactive Swagger UI at `/api`
- Auto-generated API documentation
- Try-it-out functionality for all endpoints

## 🛠️ Tech Stack

- **Framework:** NestJS
- **Language:** TypeScript
- **Validation:** class-validator, class-transformer
- **Documentation:** @nestjs/swagger, swagger-ui-express
- **Runtime:** Node.js

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🏃 Running the Application

```bash
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run start:prod

# Standard development mode
npm run start
```

The application will start on **http://localhost:5000**

## 📚 API Documentation

Once the application is running, access the interactive Swagger UI documentation at:

**🔗 http://localhost:5000/api**

This provides:
- Complete API endpoint documentation
- Request/response schemas
- Interactive testing interface
- Example requests and responses

## 🔌 API Endpoints

### Students

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| `GET` | `/students` | Get all students | - | `Student[]` |
| `GET` | `/students/:id` | Get student by ID | - | `Student \| undefined` |
| `POST` | `/students` | Create new student | `CreateStudentDto` | `Student` |
| `PUT` | `/students/:id` | Update student | `UpdateStudentDto` | `Student \| null` |
| `DELETE` | `/students/:id` | Delete student | - | `void` (204) |

### Student Schema

```typescript
{
  "id": number,           // Auto-generated
  "name": string,         // Required, non-empty
  "age": number,          // Required, 5-100
  "class": string,        // Required, non-empty
  "teacherId": string     // Required, valid UUID
}
```

## 🧪 Testing the API

### Option 1: Swagger UI (Recommended)
1. Open http://localhost:5000/api
2. Click on any endpoint
3. Click "Try it out"
4. Fill in the parameters
5. Click "Execute"

### Option 2: Using the HTTP File
Open `students-api.http` in VS Code with REST Client or Thunder Client extension:
- Click "Send Request" above any endpoint
- Modify the request data as needed
- View responses inline

### Option 3: Automated Test Script
```bash
# Run all CRUD operations
./test-students-api.sh
```

### Option 4: cURL Commands

**Create a student:**
```bash
curl -X POST http://localhost:5000/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "age": 20,
    "class": "Computer Science",
    "teacherId": "123e4567-e89b-12d3-a456-426614174000"
  }'
```

**Get all students:**
```bash
curl http://localhost:5000/students
```

**Get student by ID:**
```bash
curl http://localhost:5000/students/1
```

**Update a student:**
```bash
curl -X PUT http://localhost:5000/students/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Doe",
    "age": 21
  }'
```

**Delete a student:**
```bash
curl -X DELETE http://localhost:5000/students/1
```

## 📁 Project Structure

```
src/
├── app.module.ts              # Root module
├── main.ts                    # Application entry point with Swagger setup
├── students/
│   ├── dto/
│   │   ├── create-student.dto.ts    # Create student validation
│   │   └── update-student.dto.ts    # Update student validation
│   ├── students.controller.ts       # Students endpoints
│   ├── students.service.ts          # Business logic
│   ├── students.module.ts           # Students module
│   └── students.type.ts             # Student type definition
└── teachers/
    └── ...                    # Teachers module (similar structure)
```

## 🔧 Configuration

### Port
Default port: `5000`

To change the port, set the `PORT` environment variable:
```bash
PORT=3000 npm run start:dev
```

### Validation
Global validation is enabled with:
- `whitelist: true` - Strip properties that don't have decorators
- `forbidNonWhitelisted: true` - Throw error for unknown properties
- `transform: true` - Auto-transform payloads to DTO instances

---
