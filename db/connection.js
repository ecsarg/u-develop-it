const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password 
    password: 'Ag00d12day!',
    database: 'election'
  });

  module.exports = db;