# Log Analyzer Tool

A simple log analysis tool built with Node.js (Express) and React (Vite).  
It processes server log files and generates useful results like endpoint usage and status code distribution.

---

## Features

- Upload server log files
- Detect and parse different log formats
- Extract API endpoints
- Count HTTP status codes
- Handle malformed and inconsistent log lines gracefully
- Ignore invalid or irrelevant lines safely

---

## Tech Stack

- Frontend: React (Vite)
- Backend: Node.js + Express
- File Upload: Multer
- CORS enabled for API communication

---

## Project Structure

```bash
Log_Analyzer_Tool/
├── log-tool (Frontend - React)
├── server (Backend - Express)
```

---

## How to Run This Project

### Clone the repository

```bash
git clone <your-repo-link>
cd Log_Analyzer_Tool
```

### Start Backend (Server)

```bash
cd server
npm install
node index.js
```

### Backend will run on:

- http://localhost:5000

---

### Start Frontend (React App)

Open a new terminal:

```bash
cd log-tool
npm install
npm run dev
```

### Frontend will run on:

http://localhost:5173

---

### How to Use

1. Open the React app in browser
2. Click Choose File
3. Upload a .log file
4. Click Upload file to analyze
5. View results:

- Total lines
- Bad lines
- Endpoint counts
- Status code distribution

---

### Example of Log Format file

GET /api/users 200
POST /api/login 401
2024-03-15T14:23:01Z 192.168.1.42 GET /api/users 200 142ms
