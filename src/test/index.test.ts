process.env.NODE_ENV === "test";
import { expect } from "chai";
import * as request from "supertest";

import app from "../app";

import { connect, close } from "../database/mongoose";
import { VehicleInterface } from "../app/interfaces/VehicleInterface";

describe("GET /vehicles", () => {
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

  it("OK, getting vehicles", (done) => {
    request(app)
      .get("/vehicles")      
      .then((res) => {
        const body: VehicleInterface[] = res.body;
        expect(body.length).to.greaterThan(0);
        done();
      })
      .catch((err: Error) => done(err));
  });

  it("OK, getting empty vehicles", (done) => {
    request(app)
      .get("/vehicles")    
      .then((res) => {
        const body: VehicleInterface[] = res.body;
        expect(body.length).to.equal(0);
        done();
      })
      .catch((err: Error) => done(err));
  });

});
