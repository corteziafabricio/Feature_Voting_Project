import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const VoteButton = ({ featureId, onVote }) => {
    const handleVote = () => {
        onVote(featureId);
    };

    return (
        <TouchableOpacity onPress={handleVote} style={{ padding: 10, backgroundColor: '#007BFF', borderRadius: 5 }}>
            <Text style={{ color: '#FFFFFF' }}>Upvote</Text>
        </TouchableOpacity>
    );
};

export default VoteButton;