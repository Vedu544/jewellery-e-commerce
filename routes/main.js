const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    const locals = {
        title: "finalseries",
        description : "learning second time"
    }
    res.render('index',{locals})

})

router.get('/register',(req,res)=>{
    res.render('register')
})

router.get('/login',(req,res)=>{
    res.render('login')
})
// router.get('/add-to-cart',(req,res)=>{
//     res.render('add-to-cart')
// })

router.get('/getJewelleries',async(req,res)=>{
    // console.log("hiii")
    let collection = db.collection('jewellary_items');
    let jewellery = await collection.find({}).toArray();
    // console.log(data)
    res.json({jewellery})
}) 


module.exports = router;