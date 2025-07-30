const express = require('express');
const cors = require('cors');
const { connectDB } = require('./config/database');
const featureRoutes = require('./routes/features');
const voteRoutes = require('./routes/votes');

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/features', featureRoutes);
app.use('/api/votes', voteRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Feature Voting API is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});