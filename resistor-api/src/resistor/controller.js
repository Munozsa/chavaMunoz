const { colorVals } = require("./dataModel");
const isEmpty = require("lodash.isempty");

findBandValue = (value, opc) => {
	var indxOfData = colorVals.body.find(function (item, i) {
		if (item.text === value) {
			return item;
		}
	});
	switch (opc) {
		case "firstDig":
			return indxOfData.digits;
		case "secondDig":
			return indxOfData.digits;
		case "multiplier":
			return indxOfData.mutiplier;
		case "tolerance":
			return indxOfData.tolerance;
		default:
			return 0;
	}
};

exports.calculateResistance = (req, res) => {
	if (!req.body || isEmpty(req.body)) {
		return res.status(400).json("No data passed through body");
	}
	if (!req.body.first) {
		if (req.body.first.trim().length === 0)
			return res.status(400).json("First value missing");
		return res.status(400).json("First value missing");
	}
	if (!req.body.second) {
		if (req.body.second.trim().length === 0)
			return res.status(400).json("Second value missing");
		return res.status(400).json("Second value missing");
	}
	if (!req.body.third) {
		if (req.body.third.trim().length === 0)
			return res.status(400).json("Third value missing");
		return res.status(400).json("Third value missing");
	}

	if (!req.body.fourth) {
		if (req.body.fourth.trim().length === 0)
			return res.status(400).json("Fourth value missing");
		return res.status(400).json("Fourth value missing");
	}

	let result;
	const firstDig = findBandValue(req.body.first, "firstDig");
	const secondDig = findBandValue(req.body.second, "secondDig");
	const thirdDig = findBandValue(req.body.third, "multiplier");
	const fourthDig = findBandValue(req.body.fourth, "tolerance");

	try {
		result = parseInt(firstDig.toString() + secondDig.toString());
		if (thirdDig !== "") result = result * thirdDig;
		result = result.toString() + " Ohms " + fourthDig;
		console.log(result);
		return res.status(200).json(result);
	} catch (e) {
		return res.status(500).json(e);
	}
};
