const Card = require("../models/card-model");

const cards = async (req, res) => {
  try {
    const response = await Card.find();
    if (!response || response.length === 0) {
      // Handle the case where no documents were found
      return res.status(404).json({ msg: "No cards found" });
    }
    return res.status(200).json({ msg: "Cards found", data: response });
  } catch (error) {
    console.log(`Error from the server: ${error}`); // Fix the string interpolation here
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { cards }; // Ensure the function is exported correctly
