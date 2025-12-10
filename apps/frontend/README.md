# Student Management System - Frontend

A React application built with Vite and TypeScript for managing students.

## 🚀 Features

- **View Students:** Displays a list of all students in a table.
- **Delete Students:** Allows deleting students directly from the UI.
- **Real-time Updates:** Table updates immediately after actions.

## 🛠️ Tech Stack

- **Framework:** React
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** CSS (Vanilla)

## 📦 Installation

```bash
# Navigate to frontend directory
cd apps/frontend

# Install dependencies
npm install
```

## 🏃 Running the Application

```bash
# Start development server
npm run dev
```

The application will start on **http://localhost:5173**.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in `apps/frontend` if you need to override defaults:

```env
VITE_BASE_URL=http://localhost:5000
```

## 🔌 API Integration

This frontend connects to the backend API at `http://localhost:5000`. Ensure the backend is running before starting the frontend.
