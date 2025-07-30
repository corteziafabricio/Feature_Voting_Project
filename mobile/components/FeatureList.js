import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import api from '../services/api';

const FeatureList = () => {
    const [features, setFeatures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await api.get('/features');
                setFeatures(response.data);
            } catch (error) {
                console.error('Error fetching features:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeatures();
    }, []);

    if (loading) {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <FlatList
            data={features}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    <Text>Votes: {item.voteCount}</Text>
                </View>
            )}
        />
    );
};

export default FeatureList;