const express = require('express');
const router = express.Router();
const apiRoutes = require('./api/index.js');  // ✅ Explicit path to index.js

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('404 Not Found');
});

module.exports = router;  // ✅ Ensure this line is present
