// const express = require("express"); // import express
// const testRoutes = require('../test_routes'); //import file we are testing
// const request = require("supertest"); // supertest is a framework that allows to easily test web apis
// const app = express(); //an instance of an express app, a 'fake' express app
// app.use('/api/test', testRoutes); //routes
// describe("testing-server-routes", () => {
//   it("GET /states - success", async () => {
//     const { body } = await request(app).get("/states"); //uses the request function that calls on express app instance
//     expect(body).toEqual("Get request successful");
//   })
// })