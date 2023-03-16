import { Schema, model } from 'mongoose';

const trainerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  expertise: {
    type: String,
    required: true,
  },
});


const Trainer = model('Trainer', trainerSchema);

export default Trainer;