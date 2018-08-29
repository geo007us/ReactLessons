const express=require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
 //allow take request, take data from the body,
 // ex send post request -> get name from that request

 const app=express();
 
 //bodyparser
 app.use(bodyParser.json());

 //DB config
 const db='mongodb://geo007us:parola1234@ds135952.mlab.com:35952/mern_shopping';

 //connect to Mongo
 mongoose.connect(db, { useNewUrlParser: true })
 .then(()=> console.log('MongoDB Connected...'))
 .catch(err=>console.log(err));

 const port=process.env.PORT ||5000;
 //process.env.PORT  este o variabila enviromentala
 app.listen(port, ()=>console.log('Server started on port', (port)));
