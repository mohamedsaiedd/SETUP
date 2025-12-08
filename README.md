# Students Management API

A NestJS-based REST API for managing students and teachers with built-in validation, Swagger documentation, and comprehensive CRUD operations.

## 🌐 Live Demo

The API is currently deployed and accessible at:

### Ngrok (Development - Recommended)
- **Status:** ✅ Active (when script is running)
- **URL:** `https://arianna-preprandial-nondeciduously.ngrok-free.dev` (Constant!)
- **How to start:** `./ngrok-share.sh`
- **Best for:** Development, demos, consistent testing

### Vercel (Production - Permanent)
- **API Base URL:** https://be-set-up.vercel.app
- **Status:** ✅ Active 24/7
- **Note:** Swagger UI has static asset loading issues (API endpoints work fine)
- **Best for:** Production API access

> **Try it now!** Visit https://be-set-up.vercel.app/students to see the API in action.

---

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

### Quick Start (Recommended)

Use the automated startup script that handles port conflicts:

```bash
# Automatically kills any process on port 5000 and starts the app
./start.sh
```

This script will:
- ✅ Check if port 5000 is in use
- ✅ Automatically kill any existing processes on port 5000
- ✅ Start the development server with hot-reload

### Manual Start

```bash
# Development mode with hot-reload
npm run start:dev

# Production mode
npm run start:prod

# Standard development mode
npm run start
```

### If Port 5000 is Already in Use

```bash
# Kill processes on port 5000
lsof -ti:5000 | xargs kill -9

# Then start the app
npm run start:dev
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

## 🚀 Deployment

This API is deployed using multiple platforms:

### Ngrok (Development - Recommended)
- **Purpose:** Development with a static/constant URL
- **How to start:** `./ngrok-share.sh`
- **URL:** `https://arianna-preprandial-nondeciduously.ngrok-free.dev` (Constant!)
- **Setup:**
  1. Sign up at [ngrok.com](https://ngrok.com)
  2. Get your static domain from the dashboard
  3. Run the script (domain is already configured!)
- **Pros:** Constant URL, reliable, free tier, Swagger works perfectly

### Vercel (Production)
- **Purpose:** Production deployment
- **URL:** https://be-set-up.vercel.app (permanent)
- **How it works:** Serverless deployment from GitHub
- **Pros:** Free tier, auto-deploy on git push, always available 24/7
- **Cons:** Swagger UI static assets don't load (API endpoints work fine)
- **Best for:** Production API (without Swagger UI)

### Recommended for Production
For a production deployment with full Swagger UI support, consider:
- **Render** - Free tier, perfect for NestJS, Swagger works perfectly
- **Railway** - Free tier, zero config, auto-deploy
- **Fly.io** - Free tier, no sleep mode, global deployment

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

## 🛠️ Helper Scripts

### Startup Script
- **`start.sh`** - Automatically kills processes on port 5000 and starts the dev server
- Usage: `./start.sh`

### Testing Scripts
- **`test-students-api.sh`** - Automated testing of all CRUD operations
- Usage: `./test-students-api.sh`

### API Testing
- **`students-api.http`** - HTTP requests for VS Code REST Client/Thunder Client
- Usage: Open in VS Code and click "Send Request"

---
