const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes.js');        // ✅ Explicit path
const thoughtRoutes = require('./thoughtRoutes.js');  // ✅ Explicit path

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;  // ✅ Ensure this line is present
