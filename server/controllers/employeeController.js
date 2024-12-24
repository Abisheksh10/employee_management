/*const Employee = require('../models/Employee');

const addEmployee = (req, res) => {
    const { name, employeeId, email, phoneNumber, department, dateOfJoining, role } = req.body;
    
    Employee.findByEmployeeIdOrEmail(employeeId, email, (err, results) => {
        if (results.length > 0) {
            return res.status(400).json({ error: 'Employee ID or Email already exists' });
        }
        Employee.create({ name, employeeId, email, phoneNumber, department, dateOfJoining, role }, (err) => {
            if (err) return res.status(500).json({ error: 'Error adding employee' });
            res.status(201).json({ message: 'Employee added successfully' });
        });
    });
};

module.exports = { addEmployee };*/

// const Employee = require('../models/Employee');

// const addEmployee = (req, res) => {
//     const {
//         name,
//         employeeId,
//         email,
//         phoneNumber,
//         department,
//         dateOfBirth,
//         dateOfJoining,
//         role
//     } = req.body;

//     // Check if Employee ID or Email already exists
//     Employee.findByEmployeeIdOrEmail(employeeId, email, (err, results) => {
//         if (err) {
//             return res.status(500).json({ error: 'Database query error' });
//         }

//         if (results.length > 0) {
//             // Identify which field is already in use
//             const duplicateField = results.some(emp => emp.employeeId === employeeId)
//                 ? 'Employee ID'
//                 : 'Email';
//             return res.status(400).json({ error: `${duplicateField} already exists` });
//         }

//         // Create new employee
//         Employee.create(
//             { name, employeeId, email, phoneNumber, department, dateOfBirth, dateOfJoining, role },
//             (err) => {
//                 if (err) {
//                     // Specific error handling
//                     if (err.code === 'ER_DUP_ENTRY') {
//                         return res.status(400).json({ error: 'Duplicate entry detected' });
//                     }
//                     return res.status(500).json({ error: 'An error occurred while adding the employee' });
//                 }

//                 res.status(201).json({ message: 'Employee added successfully' });
//             }
//         );
//     });
// };

// module.exports = { addEmployee };

