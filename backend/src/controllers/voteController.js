const { getPool, sql } = require('../config/database');

const voteFeature = async (req, res) => {
    try {
        const { featureId } = req.params;
        const { userId } = req.body;

        if (!userId) {
            return res.status(400).json({ error: 'User ID is required' });
        }

        const pool = getPool();
        
        // Check if user already voted
        const existingVote = await pool.request()
            .input('featureId', sql.Int, featureId)
            .input('userId', sql.VarChar, userId)
            .query('SELECT id FROM votes WHERE feature_id = @featureId AND user_id = @userId');

        if (existingVote.recordset.length > 0) {
            return res.status(400).json({ error: 'User has already voted for this feature' });
        }

        // Add vote
        await pool.request()
            .input('featureId', sql.Int, featureId)
            .input('userId', sql.VarChar, userId)
            .query('INSERT INTO votes (feature_id, user_id, created_at) VALUES (@featureId, @userId, GETDATE())');

        // Update vote count
        await pool.request()
            .input('featureId', sql.Int, featureId)
            .query('UPDATE features SET vote_count = vote_count + 1 WHERE id = @featureId');

        res.json({ message: 'Vote recorded successfully' });
    } catch (error) {
        console.error('Error voting:', error);
        res.status(500).json({ error: 'Failed to record vote' });
    }
};

module.exports = {
    voteFeature
};