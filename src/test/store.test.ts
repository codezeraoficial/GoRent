process.env.NODE_ENV === "test";
import { expect } from "chai";
import * as request from "supertest";

import app from "../app";

import { connect, close } from "../database/mongoose";
import { VehicleInterface } from "../app/interfaces/VehicleInterface";

describe("POST /vehicles", () => {
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

  it("OK, creating a new vehicle", (done) => {
    request(app)
      .post("/vehicles")
      .send({
        licensePlate: "FGT-2569",
        chassis: "9d9dfgbhgyhvhvdkiii89dc99e",
        renavam: "21215155565",
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

  it("Fail, license plate can't repeat", (done) => {
    request(app)
      .post("/vehicles")
      .send({
        licensePlate: "PTY-5695",
        chassis: "9d9dfgdfdfdfjjii89dc99e",
        renavam: "212898989565",
        model: "Dyna Top",
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

  it("Fail, chassis can't repeat", (done) => {
    request(app)
      .post("/vehicles")
      .send({
        licensePlate: "FGT-5639",
        chassis: "9d9djkijkvdkiii89dc99e",
        renavam: "2121545454",
        model: "Dyna Top",
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

  it("Fail, renavam can't repeat", (done) => {
    request(app)
      .post("/vehicles")
      .send({
        licensePlate: "FGT-2525",
        chassis: "9d9dfgbhgyhyjjii89dc99e",
        renavam: "12446555625",
        model: "Dyna Top",
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
