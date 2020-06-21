import * as mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: false,
    },
    licensePlate: {
      type: String,
      required: true,
    },
    chassis: {
      type: String,
      required: true,
    },
    renavam: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Vehicle", VehicleSchema);
