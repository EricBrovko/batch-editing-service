"use strict";

const express = require("express");
const controllers = require("../../controllers/batch");
const router = express.Router();

// TODO: Add Rate limit as a middleware
router.put("/", controllers.put);

module.exports = router;
