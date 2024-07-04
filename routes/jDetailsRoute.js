const express = require('express');

const router = express.Router();

const {
    loadJitemsPage
} = require("../controllers/jDetailsController")

router.get('/jdetails',loadJitemsPage)


module.exports = router;
