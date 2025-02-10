const express = require("express");
const { signup, login } = require("../controllers/auth-controller");
const {
  createBusiness,
  getBusinesses,
} = require("../controllers/business-controller");
const { validateBusinessData } = require("../middlewares/business-middleware");

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);
router.post("/business", validateBusinessData, createBusiness);
// router.get('/business', getBusinesses);

module.exports = router;
