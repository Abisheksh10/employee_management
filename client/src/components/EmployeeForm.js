import React, { useState } from 'react';
import axios from 'axios';
import './EmployeeForm.css';
function EmployeeForm() {
    const [formData, setFormData] = useState({
        name: '',
        employeeId: '',
        email: '',
        phoneNumber: '',
        department: '',
        dob: '',
        dateOfJoining: '',
        role: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
        setMessage('');
        setFieldErrors({});
    };

    const calculateAge = (dob) => {
        const birthDate = new Date(dob);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        if (today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const validateInputs = () => {
        let errors = {};
        
        if (formData.name.trim().length < 3) {
            errors.name = 'Name must be at least 3 characters.';
        }

        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Phone number must be 10 digits.';
        }

        if (calculateAge(formData.dob) < 18) {
            errors.dob = 'Age must be at least 18 years.';
        }

        if (new Date(formData.dateOfJoining) > new Date()) {
            errors.dateOfJoining = 'Date of Joining cannot be in the future.';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateInputs();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/employees/add', formData);
            setMessage(response.data.message);
            setFormData({
                name: '',
                employeeId: '',
                email: '',
                phoneNumber: '',
                department: '',
                dob: '',
                dateOfJoining: '',
                role: ''

            });
        } catch (error) {
            if (error.response && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('An unexpected error occurred.');
            }
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit} className="employee-form">
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                {fieldErrors.name && <p className="error">{fieldErrors.name}</p>}
            </div>
            <div>
                <label>Employee ID:</label>
                <input
                    type="text"
                    name="employeeId"
                    placeholder="Employee ID"
                    value={formData.employeeId}
                    onChange={handleChange}
                    maxLength="10"
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                />
                {fieldErrors.phoneNumber && <p className="error">{fieldErrors.phoneNumber}</p>}
            </div>
            <div>
                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
                {fieldErrors.dob && <p className="error">{fieldErrors.dob}</p>}
            </div>
            <div>
                <label>Department:</label>
                <select name="department" value={formData.department} onChange={handleChange} required>
                    <option value="">Select Department</option>
                    <option value="HR">HR</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>
            <div>
                <label>Date of Joining:</label>
                <input
                    type="date"
                    name="dateOfJoining"
                    value={formData.dateOfJoining}
                    onChange={handleChange}
                    max={new Date().toISOString().split('T')[0]}
                    required
                />
                {fieldErrors.dateOfJoining && <p className="error">{fieldErrors.dateOfJoining}</p>}
            </div>
            <div>
                <label>Role:</label>
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
            <button type="reset" onClick={() => setFormData({
                name: '', employeeId: '', email: '', phoneNumber: '', 
                department: '', dob: '', dateOfJoining: '', role: ''
            })}>Reset</button>
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
        </form>


        
        </div>
    );
}

export default EmployeeForm;









