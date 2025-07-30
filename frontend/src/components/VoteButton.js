import React from 'react';

const VoteButton = ({ featureId, onVote }) => {
    const handleVote = async () => {
        try {
            await onVote(featureId);
        } catch (error) {
            console.error('Error voting:', error);
        }
    };

    return (
        <button onClick={handleVote}>
            Upvote
        </button>
    );
};

export default VoteButton;