const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  businessDescription: { type: String, required: true },
  industryType: { type: String, required: true },
  productServiceDetails: { type: String, required: true },
  stageOfDevelopment: { type: String, required: true },
  targetMarket: { type: String, required: true },
  revenueModel: { type: String, required: true },
  profitMargin: { type: Number, required: true },
});

module.exports = mongoose.model("Business", businessSchema, "businesses");
