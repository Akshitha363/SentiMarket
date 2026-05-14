# SentiMarket 🚀

AI-Powered Cryptocurrency Sentiment Analysis Dashboard

---

## 📌 Overview

SentiMarket is a full-stack web application developed to analyze and visualize cryptocurrency market sentiment using real-time social media and sentiment-based data.

The platform provides an interactive dashboard with live sentiment insights, analytics, charts, and market trend monitoring. The application is fully deployed on cloud platforms with AWS RDS MySQL database integration.

---

## ✨ Features

- 📊 Real-time Sentiment Dashboard
- 📈 Interactive Charts & Analytics
- 📰 Latest Market Feed Display
- ☁️ Cloud Hosted Frontend & Backend
- 🗄️ AWS RDS MySQL Database Integration
- 🔗 REST API Connectivity
- 📱 Responsive User Interface
- ⚡ Live Backend Data Fetching
- 🔄 Auto Refresh System

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- AWS RDS MySQL

### Deployment
- Vercel (Frontend)
- Render (Backend)

### Tools & Version Control
- GitHub
- MySQL Workbench
- VS Code

---

## 🌐 Live Deployment

### Frontend
https://senti-market.vercel.app

### Backend API
https://sentimarket-backend-6oqi.onrender.com/api/sentiment

### GitHub Repository
https://github.com/Akshitha363/SentiMarket

---

## 📂 Project Structure

```bash
SentiMarket/
│
├── backend/
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── app.js
│
├── README.md
└── .gitignore
⚙️ Installation & Setup
Clone Repository
git clone https://github.com/Akshitha363/SentiMarket.git
Navigate to Backend
cd backend
Install Dependencies
npm install
Start Backend Server
node server.js
Run Frontend

Open index.html in browser or use Live Server.

📡 API Endpoints
Get Sentiment Summary
GET /api/sentiment
Get Raw Data
GET /api/data
Get Latest Feed
GET /api/latest
Get Summary Statistics
GET /api/summary
🗄️ Database Schema
sentiments Table
Column Name	Data Type
id	int
user_name	varchar(255)
text	text
date	varchar(50)
hashtags	text
🎯 Future Enhancements
AI/ML Sentiment Prediction
Real-Time Social Media API Integration
User Authentication System
Advanced Market Forecasting
Mobile Application Version
Admin Analytics Dashboard
👩‍💻 Author

Akshitha

GitHub:
https://github.com/Akshitha363

📄 License

This project is developed for academic and educational purposes.

