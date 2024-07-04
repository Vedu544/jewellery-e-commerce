
const express = require('express');
const router = express.Router();

const {
    loadpage,
    sort,
    filter,
    categories,
    genders
    
} = require("../controllers/jlistController")

router.get("/",loadpage)
router.post("/sortList",sort)
router.post("/filter",filter)
router.post("/category",categories)
router.post("/genders",genders)





module.exports =  router