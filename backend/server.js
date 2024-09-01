const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();
app.use(cors());
const port = 3000;

// SQL Server configuration
const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Route to fetch course details
app.get("/courses", async (req, res) => {
  try {
    const pool = mysql.createPool(config).promise();
    const [rows] = await pool.query("SELECT * FROM CourseDetails");
    console.log(rows);
    console.log("------------------Data retrieved-------------");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching courses: ", err);
    res.status(500).send("Internal server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
