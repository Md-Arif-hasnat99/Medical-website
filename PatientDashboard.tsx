import React, { useEffect, useState } from 'react';
import { fetchPatientData } from '../../services/api';

const PatientDashboard: React.FC = () => {
    const [patientData, setPatientData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const getPatientData = async () => {
            try {
                const data = await fetchPatientData();
                setPatientData(data);
            } catch (err) {
                setError('Failed to fetch patient data');
            } finally {
                setLoading(false);
            }
        };

        getPatientData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Patient Dashboard</h1>
            {patientData ? (
                <div>
                    <h2>Medical Records</h2>
                    <ul>
                        {patientData.records.map((record: any, index: number) => (
                            <li key={index}>
                                <strong>Date:</strong> {record.date} <br />
                                <strong>Description:</strong> {record.description}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div>No medical records found.</div>
            )}
        </div>
    );
};

export default PatientDashboard;