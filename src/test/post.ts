import {expect} from 'chai';
import * as request from 'supertest';

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
        licensePlate: "PTY-2536",
        chassis: "9d9dfbgvhvddf8f989dc99e",
        renoved: "123546885",
        model: "Dyna",
        brand: "Harley Davidson",
        year: "2020",
      })
      .then((res) => {
        const body: VehicleInterface = res.body;        
        expect(body).to.have.property("_id");
        expect(body).to.have.property("licensePlate");
        expect(body).to.have.property("chassis");
        expect(body).to.have.property("renoved");
        expect(body).to.have.property("model");
        expect(body).to.have.property("brand");
        expect(body).to.have.property("year");
        done();

      })
      .catch((err: Error) => done(err));
  });
});
