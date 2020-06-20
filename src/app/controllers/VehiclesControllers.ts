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

    return res.json({ message: "Hello World" });
  }

  public async update(req: Request, res: Response) {
    const VehicleId = Number(req.params.id);
    const params: VehicleInterface = req.body;
  }

  public async destroy(req: Request, res: Response) {
    const VehicleId = Number(req.params.id);
  }
}
