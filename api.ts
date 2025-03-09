import axios from 'axios';

const API_BASE_URL = 'https://api.yourmedicalwebsite.com';

export const fetchPatientData = async (patientId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/patients/${patientId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching patient data: ' + error.message);
    }
};

export const updatePatientData = async (patientId, data) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/patients/${patientId}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error updating patient data: ' + error.message);
    }
};

export const fetchDoctorData = async (doctorId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/doctors/${doctorId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching doctor data: ' + error.message);
    }
};

export const fetchMedicalOfficialData = async (officialId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/medical-officials/${officialId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching medical official data: ' + error.message);
    }
};