import React, { useEffect, useState } from 'react';
import { fetchPatientsData } from '../../services/api';

interface Patient {
    id: number;
    name: string;
    healthRecord: string;
}

const DoctorDashboard: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);

    useEffect(() => {
        const getPatientsData = async () => {
            const data = await fetchPatientsData();
            setPatients(data);
        };

        getPatientsData();
    }, []);

    return (
        <div>
            <h1>Doctor Dashboard</h1>
            <h2>Patients List</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        {patient.name} - {patient.healthRecord}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorDashboard;