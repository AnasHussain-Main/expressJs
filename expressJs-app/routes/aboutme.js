var express = require('express');
var router = express.Router();

// Handle GET requests for the '/aboutme'
router.get('/', function (req, res) {
    // Render the corresponding EJS template
    res.render('AboutMe'); 
});

module.exports = router;
