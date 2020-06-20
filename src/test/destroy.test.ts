process.env.NODE_ENV === "test";
import { expect } from "chai";
import * as request from "supertest";

import app from "../app";

import { connect, close } from "../database/mongoose";
import { VehicleInterface } from "../app/interfaces/VehicleInterface";

describe("DELETE /vehicles", () => {
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

  it("OK, removing vehicle by id", (done) => {
    request(app)
      .delete("/vehicles/5eee845c96f4c70e586ab5a5")
      .then((res) => {
        const body: { message: string } = res.body;
        expect(body.message).to.equal("Vehicle  removed successfully.");
        done();
      })
      .catch((err: Error) => done(err));
  });

  it("OK, removing  vehicle not found", (done) => {
    request(app)
      .delete("/vehicles/5eee845c96f4c70e586ab5a5")
      .then((res) => {
        const body: { error: string } = res.body;
        expect(body.error).to.equal("Vehicle was not found.");
        done();
      })
      .catch((err: Error) => done(err));
  });
});
