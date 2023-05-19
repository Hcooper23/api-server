const express = require('express');
const app = express();
const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes');
const Food = require('./models/food');
const Clothes = require('./models/clothes');
const Collection = require('./collection');

app.use(express.json());

// Create new instances of the collection using the models
const foodCollection = new Collection(Food);
const clothesCollection = new Collection(Clothes);

// Use the router modules and pass the collection instances
app.use('/food', foodRoutes(foodCollection));
app.use('/clothes', clothesRoutes(clothesCollection));

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = server;