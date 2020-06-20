import * as mongoose from 'mongoose';

const VehicleSchema = new mongoose.Schema({
  licensePalte: String,
  chassis: String,
  renoved: String,
  model: String,
  brand: String,
  year: String,  
})

export default mongoose.model('Vehicle', VehicleSchema);