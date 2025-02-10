const express = require("express");
const router = express.Router();
const cardController = require("../controllers/card-controller"); // Import the whole module

router.route("/card").get(cardController.cards); // Call the cards function from the imported controller
module.exports = router;
