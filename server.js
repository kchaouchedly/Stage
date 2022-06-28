const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express(); 
const mogoose = require ('mongoose'); 
const User = require('./models/User');
mongoose.connect('mongodb+srv://chedly:chedly@cluster0.qpvvq.mongodb.net/?retryWrites=true&w=majority',(err,done)=>{
    if(err){
        console.log(err);
    }
if(done){
console.log("connected to database  ");
}
})
app.listen(5000,()=>console.log("serveur en marche"));




