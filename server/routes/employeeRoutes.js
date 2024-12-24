// /*const express = require('express');
// const router = express.Router();

// // Create a New Employee
// router.post('/', (req, res) => {
//     const db = req.app.get('db');
//     const { name, employeeId, email, phoneNumber, department, dateOfJoining, role } = req.body;

//     // Validate Input
//     if (!name || !employeeId || !email || !phoneNumber || !department || !dateOfJoining || !role) {
//         return res.status(400).send({ error: 'All fields are required' });
//     }

//     const query = `
//         INSERT INTO employees (name, employeeId, email, phoneNumber, department, dateOfJoining, role)
//         VALUES (?, ?, ?, ?, ?, ?, ?)`;
        
//     const queryParams = [name, employeeId, email, phoneNumber, department, dateOfJoining, role];
    
//     db.query(query, queryParams, (err, result) => {
//         if (err) {
//             console.error('Database error:', err.message);
//             return res.status(500).send({ error: 'Failed to add employee. Please check the data or table structure.' });
//         }
//         res.status(201).send({ message: 'Employee added successfully!', id: result.insertId });
//     });
// });

// // Fetch All Employees
// router.get('/', (req, res) => {
//     const db = req.app.get('db');
//     db.query('SELECT * FROM employees', (err, results) => {
//         if (err) {
//             console.error('Database error:', err.message);
//             return res.status(500).send({ error: 'Internal Server Error' });
//         }
//         res.status(200).send(results);
//     });
// });

// module.exports = router;*/

// const express = require('express');
// const router = express.Router();

// // Create a New Employee
// router.post('/', (req, res) => {
//     const db = req.app.get('db');
//     const { name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob } = req.body;

//     // Validate Input
//     if (!name || !employeeId || !email || !phoneNumber || !department || !dateOfJoining || !role || !dob) {
//         return res.status(400).send({ error: 'All fields, including date of birth (dob), are required' });
//     }

//     const query = `
//         INSERT INTO employees 
//         (name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

//     const queryParams = [name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob];

//     db.query(query, queryParams, (err, result) => {
//         if (err) {
//             console.error('Database error:', err.message);
//             return res.status(500).send({ error: `Failed to add employee: ${err.message}` });
//         }
//         res.status(201).send({ message: 'Employee added successfully!', id: result.insertId });
//     });
// });

// // Fetch All Employees
// router.get('/', (req, res) => {
//     const db = req.app.get('db');
//     db.query('SELECT * FROM employees', (err, results) => {
//         if (err) {
//             console.error('Database error:', err.message);
//             return res.status(500).send({ error: 'Internal Server Error' });
//         }
//         res.status(200).send(results);
//     });
// });

// module.exports = router;

