const express = require('express');
const router = express.Router();
const { getThoughts, createThought } = require('../../controllers/thoughtController');

// Check if functions are imported correctly
console.log(getThoughts, createThought);  // ✅ TEMP: Log to check if they are undefined

router.route('/')
  .get(getThoughts)        // ✅ Ensure this function exists in the controller
  .post(createThought);    // ✅ Ensure this function exists in the controller

module.exports = router;
