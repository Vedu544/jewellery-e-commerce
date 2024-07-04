require ('dotenv').config();

const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000;
app.use(express.static('public'));
app.use(express.json())




const bodyParser = require('body-parser');


const expresslayouts = require ('express-ejs-layouts')
//templating engine

app.use(expresslayouts);
app.set('layout','./layouts/home')
app.set('view engine','ejs')


const mongoose = require('mongoose');


const { connect } = require('./routes/main');
app.use('/',require('./routes/main'))




const connectdb = require('./config/db');
connectdb();




const connectuser = require('./config/User')
const jDetailsRouter = require('./routes/jDetailsRoute')



const cookieParser = require('cookie-parser')
app.use(cookieParser());

const jsonwebtoken = require('jsonwebtoken')



const authRoutes = require('./routes/authroute')
app.use('/authroute',require('./routes/authroute'))
const { requireAuth, checkUser } = require('./middleware/authMiddleware')
app.use(authRoutes)




//routes
app.get('*',checkUser)
app.use('/jList',require('./routes/jlistRoute'))
app.use('/',jDetailsRouter)
app.use('/add-to-cart',requireAuth, require('./routes/addtocartRoute'))
app.use('/addtofavorites',require('./routes/addtofavorites'))
app.use('/authroute',require('./routes/authroute'))



app.listen(PORT,()=>{
    console.log(`app listening on port ${PORT}`)
})


