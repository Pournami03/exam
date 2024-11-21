const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const bookingRoutes = require('./routes/bookingRoutes');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use('/api/bookings', bookingRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected successfully'))
  .catch((error) => console.log('Error connecting to database:', error));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
