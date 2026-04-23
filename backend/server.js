const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DB CONNECTION (AWS RDS)
const db = mysql.createConnection({
  host: "senti-db.c9m8gi0807ax.eu-north-1.rds.amazonaws.com",
  user: "admin",
  password: "Akshitha12",
  database: "sentidb",
  port: 3306
});

// ✅ CONNECT
db.connect(err => {
  if (err) {
    console.error("❌ DB connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL (RDS)");
  }
});


// 🔥 API 1: RAW DATA
app.get("/api/data", (req, res) => {
  db.query("SELECT * FROM sentiments LIMIT 100", (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result);
  });
});


// 🔥 API 2: SUMMARY (IMPROVED)
app.get("/api/summary", (req, res) => {
  const query = `
    SELECT 
      COUNT(*) as total,
      SUM(CASE WHEN sentiment='positive' THEN 1 ELSE 0 END) as positive,
      SUM(CASE WHEN sentiment='negative' THEN 1 ELSE 0 END) as negative,
      SUM(CASE WHEN sentiment='neutral' THEN 1 ELSE 0 END) as neutral
    FROM sentiments
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(result[0]);
  });
});


// 🔥 API 3: LATEST FEED
app.get("/api/latest", (req, res) => {
  db.query(
    "SELECT * FROM sentiments ORDER BY date DESC LIMIT 20",
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Database error" });
      }
      res.json(result);
    }
  );
});


// ⭐🔥 MOST IMPORTANT API (FOR YOUR UI)
app.get("/api/sentiment", (req, res) => {
  const query = `
    SELECT 
      SUM(CASE WHEN sentiment='positive' THEN 1 ELSE 0 END) AS positive,
      SUM(CASE WHEN sentiment='negative' THEN 1 ELSE 0 END) AS negative,
      SUM(CASE WHEN sentiment='neutral' THEN 1 ELSE 0 END) AS neutral
    FROM sentiments
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json(result[0]);
  });
});


// ✅ SERVER
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});