const express=require('express');
const db=require('./db');
const Mode=require('./models');

const app=express();
const port=process.env.port||8080;
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Home page is loaded');

});


//for storing the data into databse
app.post('/post',(req,res)=>{
    let data=new Mode({
        name:req.body.name,
        img:req.body.name,
        Summary:req.body.Summary
        
    });
    data.save();
    console.log(data);
    res.end("data succesulfy sent");
    


});

app.post('/update',async(req,res)=>{
    const filter = { name: req.body.name };
    const update = { img:req.body.img,Summary:req.body.Summary };
    
   
    let doc = await Mode.findOneAndUpdate(filter, update);
    console.log("succesfully updated the value");

    res.send("succesfully updates ur value");
    
});


// getting data from the database'

app.get('/get',(req,res)=>{
    

});















app.listen(port,function()
{
    console.log('sever is runing on port,8080');
})