import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

const { expect } = chai;

chai.use(chaiHttp);

describe("Authentication Service", () => {
    describe("/POST /register", () => {
        it("should register a new user", async () => {
            const res = await chai.request(app).post("/auth/register").send({
                name: "testuser",
                email: "testuser@test.com",
                password: "testpassword",
            });
            expect(res).to.have.status(201);
            expect(res.body).to.have.property("token");
        });

        it("should return an error if the username already exists", async () => {
            const res = await chai.request(app).post("/auth/register").send({
                name: "testuser5",
                email: "testuser5@test.com",
                password: "testpassword",
            });
            expect(res).to.have.status(400);
            expect(res.body).to.have.property("error");
        });
    });

    describe("/POST /login", () => {
        it("should login a user and return a token", async () => {
            const res = await chai.request(app).post("/auth/login").send({
                email: "testuser@test.com",
                password: "testpassword",
            });
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("token");
        });

        it("should return an error if the username or password is incorrect", async () => {
            const res = await chai.request(app).post("/auth/login").send({
                email: "testu@test.com",
                password: "testpassword",
            });
            expect(res).to.have.status(401);
            expect(res.body).to.have.property("error");
        });
    });
});
