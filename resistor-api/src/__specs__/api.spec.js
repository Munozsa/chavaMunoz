const supertest = require("supertest");
const server = require("../../server");
const mockData = require("../mocks/apiMockData");

const expose = supertest(server);

describe("Testing resistor calculator api", () => {
	it("Making request without sending data on the body will return a 400 status code", async (done) => {
		const res = await expose
			.post("/api/calculateResistance")
			.send(mockData.emptyBody);
		console.log(res.status);
		expect(res.status).toEqual(400);
		done();
	});
	it("Sending resistor parameters Red,Red,Orange,None and expecting response 200 and result 2200 ohms", async (done) => {
		const res = await expose
			.post("/api/calculateResistance")
			.send(mockData.firsResistance);
		expect(res.status).toEqual(200);
		expect(res.body).toEqual("22000 Ohms ±20");
		done();
	});
	it("Sending resistor parameters Brown,Violet,Grey,Gold and expecting response 200 and result 2200 ohms", async (done) => {
		const res = await expose
			.post("/api/calculateResistance")
			.send(mockData.secondResistance);
		expect(res.status).toEqual(200);
		expect(res.body).toEqual("1700000000 Ohms ±5");
		done();
	});
});
