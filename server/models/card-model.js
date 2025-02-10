const { Schema, model } = require("mongoose");

const businessSchema = new Schema({
  businessName: { type: String, required: true },
  industryType: { type: String, required: true },
  stageOfDevelopment: { type: String, required: true },
  targetMarket: { type: String, required: true },
  revenueModel: { type: String, required: true },
  productServiceDetails: { type: String, required: true },
  businessDescription: { type: String, required: true },
  valuation: { type: Number, required: true },
  ROI: { type: Number, required: true },
  AQI: { type: String, required: true },
  bulletPoints: { type: [String], required: true },
});

const Business = model("business", businessSchema);

module.exports = Business;
