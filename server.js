const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username
        user: 'root',
        // mysql password
        password: '0921%mlb',
        database: 'election'
    },
    console.log('connected to the election database')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//default response to any other request - not found
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})