const request = require('supertest');

const app = require('../server');
const avgModel = require('../models/avgModel');

beforeEach(() => {
    avgModel.clearNumbers();
});

test("should return the average of a number", async () => {
    const response = await request(app)
        .post("/average")
        .send({ num: 10 });

    expect(response.statusCode).toBe(200);
    expect(response.body.average).toBe(10);
});

test("should return the average of multiple numbers", async () => {
    await request(app)
        .post("/average")
        .send({ num: 10 });

    await request(app)
        .post("/average")
        .send({ num: 20 });

    const response = await request(app)
        .post("/average")
        .send({ num: 30 });

    expect(response.statusCode).toBe(200);
    expect(response.body.average).toBe(20);
});

test("should reject invalid number", async () => {
    const response = await request(app)
        .post("/average")
        .send({ num: "hello" });

    expect(response.statusCode).toBe(400);
});