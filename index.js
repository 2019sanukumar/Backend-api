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
//crud opertaion for updating the data in database
app.post('/update',async(req,res)=>{
    const filter = { name: req.body.name };
    const update = { img:req.body.img,Summary:req.body.Summary };
    
   
    let doc = await Mode.findOneAndUpdate(filter, update);
    console.log("succesfully updated the value");

    res.send("succesfully updates ur value");
    
});


// getting data from the database'

app.get('/get',async (req,res)=>{
    let val;
    const [data,err]=await Mode.find({name:req.body.name});
    if(data)
    {
        val=data;
        console.log(data);
    }
    else{
        console.log(err,'error in fetching data from db');

    }
    res.send(val);
    

});

//crud operation for deleting the vaur using id of database

app.get('/delete/:id',function(req,res){
    let id=req.params.id;
    Mode.findByIdAndDelete(id,function(err)
    {
        if(err)
        {
            console.log("error in deleting the data",err);
            return;
        }
        return res.send("succesfully deleted");
    })
})













app.listen(port,function()
{
    console.log('sever is runing on port,8080');
})