import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import api from '../services/api';

const FeatureForm = ({ onFeatureAdded }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        if (!title || !description) {
            alert('Please fill in both fields');
            return;
        }

        try {
            const response = await api.post('/features', { title, description });
            if (response.status === 201) {
                onFeatureAdded(response.data);
                setTitle('');
                setDescription('');
            }
        } catch (error) {
            console.error('Error adding feature:', error);
            alert('Failed to add feature. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Feature Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style={styles.input}
                placeholder="Feature Description"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <Button title="Submit Feature" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
});

export default FeatureForm;