import { VehicleController } from "./app/controllers/VehiclesControllers";

export class Routes {
  public vehicleController: VehicleController = new VehicleController();

  public routes(app): void {
    app
      .route("/vehicles")
      .get(this.vehicleController.index)
      .post(this.vehicleController.store);

    app
      .route("/vehicles/:_id")
      .get(this.vehicleController.show)
      .put(this.vehicleController.update)
      .delete(this.vehicleController.destroy);
  }
}
