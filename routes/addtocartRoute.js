const express = require('express');
const router = express.Router();

const {
    booknow
 } = require("../controllers/addtocartController")

router.get('/',booknow)

module.exports = router;


