# DevTrackr - AI Developer Productivity Dashboard

## 📌 Project Overview

DevTrackr is an AI-powered developer productivity dashboard that integrates with GitHub repositories to analyze developer activity, repository performance, and sprint progress.

The platform fetches GitHub repository data and generates productivity insights using AI-based analytics. It helps teams and developers monitor commits, repository activity, and contributor performance through interactive dashboards.

---

# 🚀 Features

- 🔐 JWT Authentication
- 👤 User Signup & Login
- 🔗 GitHub Repository Integration
- 📂 Fetch GitHub Repositories
- 📊 Dashboard Analytics
- 📈 Commit Tracking
- 🤖 AI Productivity Insights
- 📉 Sprint Progress Analysis
- 👥 Contributor Monitoring
- 📋 Repository Analytics Dashboard
- 🎨 Responsive UI using Tailwind CSS

---

# 🛠️ Tech Stack

## Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Recharts / Chart.js

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas

## APIs
- GitHub REST API
- OpenAI API

## Authentication
- JWT
- bcryptjs

---

# 🏗️ System Architecture

```text
Frontend (React + Tailwind)
           ↓
Backend API (Node.js + Express)
           ↓
MongoDB Atlas Database
           ↓
GitHub API + OpenAI API
```

---

# 📂 Project Structure

```text
DevTrackr/
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── screenshots/
├── README.md
└── .gitignore
```

---

# 🗄️ Database Schema

## User Schema

```js
{
  username: String,
  email: String,
  password: String,
  githubToken: String
}
```

---

# 🔑 Authentication Flow

```text
User Signup/Login
        ↓
JWT Token Generated
        ↓
Stored in Local Storage
        ↓
Protected API Access
```

---

# 🔗 GitHub Integration Flow

```text
User Enters GitHub Token
            ↓
Backend Calls GitHub API
            ↓
Repositories Fetched
            ↓
Dashboard Displays Analytics
```

---

# 📊 Dashboard Features

- Repository Cards
- Commit Analytics
- Productivity Metrics
- Contributor Tracking
- Sprint Monitoring
- AI Insights

---

# 📸 Screenshots

## Login Page

Add screenshot here:

```md
![Login](./screenshots/login.png)
```

---

## Signup Page

```md
![Signup](./screenshots/signup.png)
```

---

## Dashboard

```md
![Dashboard](./screenshots/dashboard.png)
```

---

# 🎥 Demo Video

Add your demo video link here:

```md
[Project Demo](YOUR_VIDEO_LINK)
```

---

# ⚙️ Installation Guide

## Clone Repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Environment Variables

Create `.env` file inside backend folder.

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
OPENAI_API_KEY=your_openai_api_key
```

---

# 📡 API Endpoints

## Authentication

```http
POST /api/auth/signup
POST /api/auth/login
```

---

## GitHub APIs

```http
POST /api/github/repos
```

---

# 🔮 Future Enhancements

- AI Sprint Summaries
- Pull Request Analytics
- Issue Tracking
- PDF Report Export
- Real-Time Notifications
- Team Collaboration Analytics
- AI Chat Assistant

---

# 📈 Git Workflow

The project follows feature-based commits with incremental development tracking using Git and GitHub.

---

# 👨‍💻 Author

Ganesh Reddy

---

# 📄 License

This project is developed for educational and academic purposes.