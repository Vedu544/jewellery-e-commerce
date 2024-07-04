const express = require('express');
const router = express.Router();

const {
    addtofavorites
} = require("../controllers/addtofavorites")

router.get('/',addtofavorites)

module.exports = router;