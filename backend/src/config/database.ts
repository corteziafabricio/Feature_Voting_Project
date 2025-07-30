import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mssql', // or 'postgres', 'sqlite', 'mssql'
});

export default sequelize;