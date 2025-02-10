const express = require('express');
const sequelize = require('./src/config/database');
const User = require('./src/models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Test database connection
sequelize.authenticate()
  .then(() => console.log('✅ Connexion à PostgreSQL réussie'))
  .catch(err => console.error('❌ Erreur de connexion à PostgreSQL:', err));

// Test route to create a user
app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = await User.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Backend en ligne avec PostgreSQL !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Serveur en écoute sur le port ${PORT}`);
});
