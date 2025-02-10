const express = require("express");
const { createBusiness, getBusinesses } = require("../controllers/business-controller");
const { validateBusinessData } = require("../middlewares/business-middleware");

const router = express.Router();

router.post("/", validateBusinessData, createBusiness);
router.get("/", getBusinesses);

module.exports = router;