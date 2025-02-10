const { Sequelize } = require('sequelize');// Corrige le chemin si nécessaire

// Initialize Sequelize with your database configuration
const sequelize = new Sequelize('mydb', 'root', 'my-password', {
  host: 'mydb-instance.cx8aacouafdp.eu-west-3.rds.amazonaws.com', // or your database host
  dialect: 'postgres', // or 'mysql', 'sqlite', 'mariadb', 'mssql'
  logging: false, // Disable logging if you don't want to see SQL queries in the console
});

// Synchronize the database (create tables if they don't exist)
sequelize.sync({ force: false }) // force: false to avoid dropping tables
  .then(() => console.log("✅ Base de données synchronisée"))
  .catch(err => console.error("❌ Erreur de synchronisation:", err));

module.exports = sequelize;
