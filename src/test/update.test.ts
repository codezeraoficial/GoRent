process.env.NODE_ENV === "test";
import { expect } from "chai";
import * as request from "supertest";

import app from "../app";

import { connect, close } from "../database/mongoose";
import { VehicleInterface } from "../app/interfaces/VehicleInterface";

describe("PUT /vehicles", () => {
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

  it("OK, updating a vehicle", (done) => {
    request(app)
      .put("/vehicles/5eee796989e3d40eaca41d5a")
      .send({
        licensePlate: "PCY-5520",
        chassis: "9d9d9cfrfrfgbgb89dc99e",
        renavam: "1235046885",
        model: "Dyna",
        brand: "Harley Davidson",
        year: "2020",
      })
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

  it("OK, updating a nonexistent vehicle", (done) => {
    request(app)
      .put("/vehicles/5eee417c7ea16f31f8aab3ac")
      .send({
        licensePlate: "PCY-5520",
        chassis: "9d9d9cfrfrfgbgb89dc99e",
        renavam: "1235046885",
        model: "Dyna",
        brand: "Harley Davidson",
        year: "2020",
      })
      .then((res) => {
        const body: VehicleInterface = res.body;
        expect(body.error).to.equal("Vehicle was not found.");       
        done();
      })
      .catch((err: Error) => done(err));
  });

  it("Fail, updating a vehicle, plate can't repeat", (done) => {
    request(app)
      .put("/vehicles/5eee796989e3d40eaca41d5a")
      .send({
        licensePlate: "PCY-5520",
        chassis: "9d9d9cfrfrfgbgb89dc99e",
        renavam: "1235046885",
        model: "Dyna",
        brand: "Harley Davidson",
        year: "2020",
      })
      .then((res) => {
        const body: VehicleInterface = res.body;        
        expect(body.error).to.equal("Vehicle with this plate already exists.");
        done();
      })
      .catch((err: Error) => done(err));
  });

  it("Fail, updating a vehicle, chassis can't repeat", (done) => {
    request(app)
    .put("/vehicles/5eee796989e3d40eaca41d5a")
    .send({
        licensePlate: "PCY-5589",
        chassis: "9d9d9cfrfrfgbgb89dc99e",
        renavam: "1235046885",
        model: "Dyna",
        brand: "Harley Davidson",
        year: "2020",
      })
      .then((res) => {
        const body: VehicleInterface = res.body;
        expect(body.error).to.equal(
          "Vehicle with this chassis already exists."
        );
        done();
      })
      .catch((err: Error) => done(err));
  });

  it("Fail, updating a vehicle, renavam can't repeat", (done) => {
    request(app)
    .put("/vehicles/5eee796989e3d40eaca41d5a")
    .send({
        licensePlate: "PCY-5589",
        chassis: "9d9d9cfrkiijijbgb89dc99e",
        renavam: "1235046885",
        model: "Dyna",
        brand: "Harley Davidson",
        year: "2020",
      })
      .then((res) => {
        const body: VehicleInterface = res.body;
        expect(body.error).to.equal(
          "Vehicle with this renavam already exists."
        );
        done();
      })
      .catch((err: Error) => done(err));
  });
});
