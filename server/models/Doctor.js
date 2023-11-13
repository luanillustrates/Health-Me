const { Schema } = require("mongoose");

const appointmentSchema = new Schema({
  name: [
    {
      type: String,
      required: true,
    },
  ],
  doctorId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  profession: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    required: true,
  },
});

module.exports = appointmentSchema;
