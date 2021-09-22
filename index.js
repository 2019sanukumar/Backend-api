const express=require('express');
const db=require('./db');
const Mode=require('./models');

const app=express();
const port=process.env.port||8080;
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Home page is loaded');

});











app.listen(port,function()
{
    console.log('sever is runing on port,8080');
})