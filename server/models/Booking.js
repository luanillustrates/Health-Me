const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookingSchema = new Schema({
  // bookedDate: {
  //   type: Date,
  //   default: Date.now,
  // },
  doctors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
  ],
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
