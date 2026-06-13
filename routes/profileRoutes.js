const express = require("express");

const router = express.Router();

const {
  analyzeProfile,
  fetchAllProfiles,
  fetchSingleProfile
} = require("../controllers/profileController");

router.post("/profile/:username", analyzeProfile);

router.get("/profiles", fetchAllProfiles);

router.get("/profile-data/:username", fetchSingleProfile);

module.exports = router;