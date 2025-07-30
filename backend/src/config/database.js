const sql = require('mssql');
require('dotenv').config();

const config = {
    server: 'DESKTOP-O3CLG10\\FABRICIO_MSSQL',
    database: 'Feature Voting',
    options: {
        encrypt: false,
        trustServerCertificate: true,
        enableArithAbort: true
    },
    authentication: {
        type: 'default'
    }
};

let pool;

const connectDB = async () => {
    try {
        pool = await sql.connect(config);
        console.log('Connected to SQL Server database');
        return pool;
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
};

const getPool = () => {
    if (!pool) {
        throw new Error('Database not connected');
    }
    return pool;
};

module.exports = { connectDB, getPool, sql };