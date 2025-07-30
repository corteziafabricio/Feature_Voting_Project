const { getPool, sql } = require('../config/database');

const getAllFeatures = async (req, res) => {
    try {
        const pool = getPool();
        const result = await pool.request().query(`
            SELECT id, title, description, vote_count, created_at 
            FROM features 
            ORDER BY vote_count DESC, created_at DESC
        `);
        res.json(result.recordset);
    } catch (error) {
        console.error('Error fetching features:', error);
        res.status(500).json({ error: 'Failed to fetch features' });
    }
};

const createFeature = async (req, res) => {
    try {
        const { title, description } = req.body;
        
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }

        const pool = getPool();
        const result = await pool.request()
            .input('title', sql.VarChar, title)
            .input('description', sql.Text, description || '')
            .query(`
                INSERT INTO features (title, description, vote_count, created_at)
                OUTPUT INSERTED.*
                VALUES (@title, @description, 0, GETDATE())
            `);
        
        res.status(201).json(result.recordset[0]);
    } catch (error) {
        console.error('Error creating feature:', error);
        res.status(500).json({ error: 'Failed to create feature' });
    }
};

const getFeatureById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = getPool();
        const result = await pool.request()
            .input('id', sql.Int, id)
            .query('SELECT * FROM features WHERE id = @id');
        
        if (result.recordset.length === 0) {
            return res.status(404).json({ error: 'Feature not found' });
        }
        
        res.json(result.recordset[0]);
    } catch (error) {
        console.error('Error fetching feature:', error);
        res.status(500).json({ error: 'Failed to fetch feature' });
    }
};

module.exports = {
    getAllFeatures,
    createFeature,
    getFeatureById
};