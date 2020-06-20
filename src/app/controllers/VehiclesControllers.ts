import { Request, Response } from "express";
import Vehicle from "../models/Vehicle";
import { VehicleInterface } from "../interfaces/VehicleInterface";

export class VehicleController {
  public async index(req: Request, res: Response) {
    const vehicles = await Vehicle.find();
    return res.status(200).json(vehicles);
  }

  public async show(req: Request, res: Response) {
    const vehicleId = req.params._id;

    if (!vehicleId)
      return res.status(400).json({ error: "Id must be provided." });

    const vehicle = await Vehicle.findById({ _id: vehicleId });

    if (vehicle === null)
      return res.status(400).json({ error: "Vehicle was not found." });

    return res.status(200).json(vehicle);
  }

  public async store(req: Request, res: Response) {
    const params: VehicleInterface = req.body;

    const plateExists = await Vehicle.findOne({
      licensePlate: params.licensePlate,
    });
    const chassisExists = await Vehicle.findOne({
      chassis: params.chassis,
    });
    const renavamExists = await Vehicle.findOne({
      renavam: params.renavam,
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
    if (renavamExists) {
      return res
        .status(400)
        .json({ error: "Vehicle with this renavam already exists." });
    }

    Vehicle.create(params)
      .then((vehicle) => res.status(201).json(vehicle))
      .catch((err: Error) => res.status(500).json(err));
  }

  public async update(req: Request, res: Response) {
    const vehicleId = req.params._id;
    const params: VehicleInterface = req.body;

    if (!vehicleId)
      return res.status(400).json({ error: "Id must be provided." });

    const vehicle = await Vehicle.findById({ _id: vehicleId });

    if (!vehicle)
      return res.status(204).json({ error: "Vehicle was not found." });

    try {
      const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, params, {
        new: true,
      });

      return res.status(201).json(vehicle);
    } catch (error) {
      return res.status(500).json(error);
    }

  }

  public async destroy(req: Request, res: Response) {
    const vehicleId = req.params._id;
    if (!vehicleId)
      return res.status(400).json({ error: "Id must be provided." });
    try {
      await Vehicle.findByIdAndRemove(vehicleId);
      return res.status(200).json({ messge: "Vehicle  removed successfully." });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
