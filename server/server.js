const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME, 
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        process.exit(1);
    } else {
        console.log('Connected to MySQL database');
    }
});
app.post('/api/employees/add', (req, res) => {
    const { name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob } = req.body;
    console.log('Received data:', req.body);
    const checkQuery = `
        SELECT * FROM employees WHERE employeeId = ? OR email = ? OR phoneNumber = ?
    `;
    
    db.query(checkQuery, [employeeId, email, phoneNumber], (err, result) => {
        if (err) {
            console.error('Error checking existing employee:', err);
            return res.status(500).json({ error: 'Database error. Please try again later.' });
        }
        if (result.length > 0) {
            if (result[0].employeeId === employeeId) {
                return res.status(400).json({ error: 'Employee ID already exists.' });
            }
            if (result[0].email === email) {
                return res.status(400).json({ error: 'Email already exists.' });
            }
            if (result[0].phoneNumber === phoneNumber) {
                return res.status(400).json({ error: 'Phone number already exists.' });
            }
        }
        
        const query = `
            INSERT INTO employees (name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        db.query(query, [name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob], (err, result) => {
            if (err) {
                console.error('Error inserting employee:', err);
                return res.status(500).json({ error: 'Failed to add employee. Please check the data format or table schema.' });
            }
            res.status(201).json({ message: 'Employee added successfully', data: result });
        });
    });
});


// Get employees with optional search
app.get('/api/employees', (req, res) => {
    const { search } = req.query;
    let query = 'SELECT * FROM employees';
    let params = [];

    if (search) {
        query += ` WHERE name LIKE ? OR employeeId LIKE ? OR email LIKE ? OR phoneNumber LIKE ? OR department LIKE ?`;
        const searchParam = `%${search}%`;
        params = [searchParam, searchParam, searchParam, searchParam, searchParam];
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error('Error fetching employees:', err);
            return res.status(500).json({ error: 'Database error. Please try again later.' });
        }
        res.json(results);
    });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
