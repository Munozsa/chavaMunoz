const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routeIndex = require("./src/routeIndex");
const routes = routeIndex.initialize();
// express server
const app = express();
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use("/api", routes);

app.listen(8080, () => {
	console.log("Server initialized running on port: 8080 ");
});

module.exports = app;
