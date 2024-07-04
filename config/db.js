const express = require('express')
const {MongoClient} = require('mongodb')
const mongoose = require ('mongoose');
const app = express();
const databasename= 'jewellary'
const url = 'mongodb://localhost:27017/jewellary'
const client = new MongoClient(url);


//connection
const connectdb = async()=>{
    try {
        mongoose.set('strictQuery',false);
        const conn = await mongoose.connect(process.env.url)
        console.log(`database connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error);
    }
}

//data get
async function getdata(){
    let result = await client.connect();
    db = result.db(databasename);
    
}
getdata();
module.exports = connectdb;

//schema

