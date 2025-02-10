const Business = require("../models/business-model");

const createBusiness = async (req, res) => {
  try {
    const business = new Business(req.body);
    await business.save();
    res.status(201).json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBusiness, getBusinesses };