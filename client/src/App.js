import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeForm from './components/EmployeeForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EmployeeSearch />} />
                <Route path="/add-employee" element={<EmployeeForm />} />
            </Routes>
        </Router>
    );
}

export default App;
