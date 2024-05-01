const express = require('express');
const cors = require('cors');
const app = express();
const restaurantsListRoutes = require('./routes/restaurantsListRoutes');

app.use(cors());
app.use('/restaurants', restaurantsListRoutes);

app.listen(3000, () => console.log("Server listening to local host 3000"));
module.exports = app;