const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
  name: [
    {
      type: String,
      required: true,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  field: {
    type: Schema.Types.ObjectId,
    ref: "Field",
    required: true,
  },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
