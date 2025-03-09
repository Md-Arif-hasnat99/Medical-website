import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/common/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to the Medical Data Management System</h1>
            <p>Your health information is important. This platform allows patients, doctors, and medical officials to manage medical data efficiently.</p>
            <h2>Navigation</h2>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    );
};

export default Home;