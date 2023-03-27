const { Router } = require("express");
const { getNeighborhoods } = require("../controllers/neighborhood-controller");

const route = Router();

route.get("/lists", getNeighborhoods);

module.exports = route;
