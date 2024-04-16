const { Schema, model } = require('mongoose');

const objectiveSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    description: {
      type: String,
      required: true,
      max_length: 250,
    },
    points: {
      type: Number,
      required: true,
    },
    image: {
        type: String,
        required: true,
        max_length: 100
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Objective = model('objective', objectiveSchema);

module.exports = Objective;