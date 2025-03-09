import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import PatientDashboard from './components/Patient/PatientDashboard';
import DoctorDashboard from './components/Doctor/DoctorDashboard';
import MedicalOfficialDashboard from './components/MedicalOfficial/MedicalOfficialDashboard';
import Header from './components/common/Header';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/patient-dashboard" component={PatientDashboard} />
                <Route path="/doctor-dashboard" component={DoctorDashboard} />
                <Route path="/medical-official-dashboard" component={MedicalOfficialDashboard} />
            </Switch>
        </Router>
    );
};

export default App;