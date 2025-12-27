const mongoose = require("mongoose");

const transactionschema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, required: true, enum: ["credit", "debit"] },

  category: { String },
  description: { String },
  date: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Transaction", transactionschema);
