import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './EmployeeSearch.css';

function EmployeeSearch() {
    const [searchQuery, setSearchQuery] = useState('');
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [typingTimeout, setTypingTimeout] = useState(null);

    const fetchEmployees = async (query) => {
        try {
            const response = await axios.get('http://localhost:5000/api/employees', {
                params: { search: query },
            });
            setEmployees(response.data);
            setError('');
        } catch (err) {
            setError('Failed to fetch employees. Please try again later.');
        }
    };

    useEffect(() => {
        fetchEmployees('');
    }, []);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Clear the previous timeout
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        // Set a new timeout
        const timeout = setTimeout(() => {
            fetchEmployees(query);
        }, 300); // Adjust delay as needed (300ms works well for most cases)

        setTypingTimeout(timeout);
    };

    return (
        <div className="employee-search">
            <h1>Employee Directory</h1>
            <div className="search-form">
                <input
                    type="text"
                    placeholder="Search by name, ID, or email"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {error && <p className="error">{error}</p>}
            <button onClick={() => navigate('/add-employee')}>Add Employee</button>
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Employee ID</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Department</th>
                        <th>Date of Joining</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.employeeId}>
                            <td>{employee.name}</td>
                            <td>{employee.employeeId}</td>
                            <td>{employee.email}</td>
                            <td>{employee.phoneNumber}</td>
                            <td>{employee.department}</td>
                            <td>{employee.dateOfJoining}</td>
                            <td>{employee.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeSearch;
