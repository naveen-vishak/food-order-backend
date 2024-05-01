const restaurantList = require("../mockData/restaurantsList.json");
const sample = require("../mockData/sample.json");

const restaurantsListController = (req, res) => {
    res.send(restaurantList);
}

module.exports = restaurantsListController;