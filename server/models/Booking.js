const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookingSchema = new Schema({
  bookedDate: {
    type: String,
    required: true,
  },
  bookedTime: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  services: [
    {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
