const express = require("express");
const routeSummary = require("./resistor/controller");

const router = express.Router();

const initialize = () => {
	router.route("/calculateResistance").post(routeSummary.calculateResistance);
	return router;
};

module.exports.initialize = initialize;
