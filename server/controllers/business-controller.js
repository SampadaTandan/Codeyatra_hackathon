const Business = require("../models/business-model");

const createBusiness = async (req, res) => {
  try {
    // Creating a new Business object using the request body
    const business = new Business(req.body);

    // Saving the business data to the database
    await business.save();

    // Responding with the saved business data
    res.status(201).json(business);
  } catch (error) {
    // In case of error, responding with the error message
    res.status(400).json({ error: error.message });
  }
};

// Optional: If you need to retrieve the list of businesses (GET request)
const getBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.status(200).json(businesses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createBusiness, getBusinesses };
