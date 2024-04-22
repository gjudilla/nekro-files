import { Schema, model } from 'mongoose';

const objectiveSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 50,
    },
    description: {
      type: String,
      required: true,
      maxlength: 250,
    },
    points: {
      type: Number,
      required: true,
    },
    image: {
        type: String,
        required: true,
        maxlength: 100
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Objective = model('Objective', objectiveSchema);

export default Objective;