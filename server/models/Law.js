const { Schema, model } = require('mongoose');


const lawSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max_length: 50,
    },
    effect: {
      type: String,
      required: true,
      max_length: 250,
    },
    icon: {
      type: String,
      required: true,
      max_length: 100,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Law = model('law', lawSchema);

module.exports = Law;