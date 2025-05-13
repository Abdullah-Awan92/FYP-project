# Exam Portal - React + Vite

This is a modern web application for managing and taking exams, built with React, Vite, and Tailwind CSS.

## Features

- User authentication
- Dashboard with upcoming exams and recent results
- Exam taking interface
- Responsive design
- Modern UI with Tailwind CSS

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd fyp-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- Font Awesome

## Project Structure

```
src/
  ├── assets/         # Images and static files
  ├── components/     # React components
  │   ├── Login.jsx
  │   ├── Dashboard.jsx
  │   ├── TakeExam.jsx
  │   └── TestPage.jsx
  ├── App.jsx         # Main application component
  ├── main.jsx        # Application entry point
  └── index.css       # Global styles
```
