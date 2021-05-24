const mongoose = require("mongoose");

const contacts = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("contacts", contacts);
