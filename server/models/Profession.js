const mongoose = require("mongoose");

const { Schema } = mongoose;

const professionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

const Profession = mongoose.model("Profession", professionSchema);

module.exports = Profession;
