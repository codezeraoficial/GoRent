import { Request, Response } from "express";
import Vehicle from "../models/Vehicle";
import { VehicleInterface } from "../interfaces/VehicleInterface";

export class VehicleController {
  public index(req: Request, res: Response) {}

  public async show(req: Request, res: Response) {
    const VehicleId = Number(req.params.id);
  }

  public async store(req: Request, res: Response) {
    const params: VehicleInterface = req.body;

    const plateExists = await Vehicle.findOne({
      licensePlate: params.licensePlate,
    });
    const chassisExists = await Vehicle.findOne({
      chassis: params.chassis,
    });

    if (plateExists) {
      return res
        .status(400)
        .json({ error: "Vehicle with this plate already exists." });
    }
    if (chassisExists) {
      return res
        .status(400)
        .json({ error: "Vehicle with this chassis already exists." });
    }

    const vehicle = await Vehicle.create(params);
    return res.json(vehicle);
  }

  public async update(req: Request, res: Response) {
    const VehicleId = Number(req.params.id);
    const params: VehicleInterface = req.body;
  }

  public async destroy(req: Request, res: Response) {
    const VehicleId = Number(req.params.id);
  }
}
