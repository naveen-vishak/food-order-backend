const express = require('express');
const restaurantsListRoutes = express.Router();
const restaurantsListController = require("../controller/restaurantsListController");

restaurantsListRoutes.get('/list/', restaurantsListController);

module.exports = restaurantsListRoutes;