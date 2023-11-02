var express = require('express');
var router = express.Router();

// Handle GET requests for the '/contactme'
router.get('/', function (req, res) {
    // Render the corresponding EJS template
    res.render('ContactMe'); 
});

module.exports = router;
