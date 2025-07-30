import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const fetchFeatures = async () => {
    try {
        const response = await axios.get(`${API_URL}/features`);
        return response.data;
    } catch (error) {
        console.error('Error fetching features:', error);
        throw error;
    }
};

export const submitFeature = async (feature) => {
    try {
        const response = await axios.post(`${API_URL}/features`, feature);
        return response.data;
    } catch (error) {
        console.error('Error submitting feature:', error);
        throw error;
    }
};

export const upvoteFeature = async (featureId) => {
    try {
        const response = await axios.post(`${API_URL}/votes`, { featureId });
        return response.data;
    } catch (error) {
        console.error('Error upvoting feature:', error);
        throw error;
    }
};