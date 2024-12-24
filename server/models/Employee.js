// /*const db = require('../config/db');

// const Employee = {
//     create: (data, callback) => {
//         const query = 'INSERT INTO employees (name, employeeId, email, phoneNumber, department, dateOfJoining, role) VALUES (?, ?, ?, ?, ?, ?, ?)';
//         db.query(query, Object.values(data), callback);
//     },
//     findByEmployeeIdOrEmail: (employeeId, email, callback) => {
//         const query = 'SELECT * FROM employees WHERE employeeId = ? OR email = ?';
//         db.query(query, [employeeId, email], callback);
//     },
// };

// module.exports = Employee;*/
// const db = require('../config/db');

// const Employee = {
//     create: (data, callback) => {
//         const query = `
//             INSERT INTO employees 
//             (name, employeeId, email, phoneNumber, department, dateOfJoining, role, dob) 
//             VALUES (?, ?, ?, ?, ?, ?, ?, ?)
//         `;
//         db.query(query, [
//             data.name,
//             data.employeeId,
//             data.email,
//             data.phoneNumber,
//             data.department,
//             data.dateOfJoining,
//             data.role,
//             data.dob
//         ], callback);
//     },
//     findByEmployeeIdOrEmail: (employeeId, email, callback) => {
//         const query = `
//             SELECT * 
//             FROM employees 
//             WHERE employeeId = ? OR email = ?
//         `;
//         db.query(query, [employeeId, email], callback);
//     },
// };

// module.exports = Employee;

