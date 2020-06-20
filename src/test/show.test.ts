process.env.NODE_ENV === "test";
import { expect } from "chai";
import * as request from "supertest";

import app from "../app";

import { connect, close } from "../database/mongoose";
import { VehicleInterface } from "../app/interfaces/VehicleInterface";

describe("GET BY ID /vehicles", () => {
  before((done) => {
    connect()
      .then(() => done())
      .catch((err: Error) => done(err));
  });

  after((done) => {
    close()
      .then(() => done())
      .catch((err: Error) => done(err));
  });

  it("OK, getting vehicle by id", (done) => {
    request(app)
      .get("/vehicles/5eee796989e3d40eaca41d5a")      
      .then((res) => {
        const body: VehicleInterface = res.body;
        expect(body).to.have.property("_id");
        expect(body).to.have.property("licensePlate");
        expect(body).to.have.property("chassis");
        expect(body).to.have.property("renavam");
        expect(body).to.have.property("model");
        expect(body).to.have.property("brand");
        expect(body).to.have.property("year");
        done();
      })
      .catch((err: Error) => done(err));
  });

  it("OK, getting  vehicle not found", (done) => {
    request(app)
      .get("/vehicles/5eee417c7ea16f31f8aab3ac")     
      .then((res) => {
        const body: VehicleInterface = res.body;
        expect(body.error).to.equal("Vehicle was not found.");
        done();
      })
      .catch((err: Error) => done(err));
  });

});
