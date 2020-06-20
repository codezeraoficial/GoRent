import { Request, Response } from "express";
import { VehicleController } from "./app/controllers/VehiclesControllers";

export class Routes {

 public vehicleController: VehicleController = new VehicleController();

  public routes(app): void {
    app
    .route("/vehicles")
    .post(this.vehicleController.store)

    // app
    // .route("/users/:id")
    // .get(this.userController.show)
    // .put(this.userController.update)
    // .delete(this.userController.delete);
    
  }
}