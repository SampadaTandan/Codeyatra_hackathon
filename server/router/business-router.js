const express = require("express");
const {
  createBusiness,
  getBusinesses,
} = require("../controllers/business-controller");

const router = express.Router();

// Route to create a new business
router.post("/business", createBusiness);

// Route to get all businesses (optional)
router.get("/business", getBusinesses);

module.exports = router;
