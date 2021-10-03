require('dotenv').config();
const express=require('express');
const db=require('./db');
const Mode=require('./models');
const {logger}=require('./logger');
const app=express();
const port=process.env.PORT;
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('Home page is loaded');

});

// 
// put proper detail in route
// return properly with 
// validate input
// try and cactch


// console.log(process.env.PORT)






//
//for storing the data into databse
app.post('/put_user_detail',(req,res)=>{
    // Mode.uploadedimage(req,res,function(err)
    // {
    //         if(err){
    //             console.log("multer errir",err);
    //         }
    //         console.log(req.file);
    // });
    try{
        let data= new Mode({
            name:req.body.name,
            img:req.body.name,
            Summary:req.body.Summary
            
        });
        data.save();
        // console.log(data);
        logger.info('data succesfully sent');
        // res.end("data succesulfy sent");
        res.status(200).send(JSON.stringify("data succesfully have been set into db"));
    }
    catch(err)
    {
        err.message="error in puttig detail of user";
        throw err;
        
    }
    


});
//crud opertaion for updating the data in database
app.post('/update_detail',async(req,res)=>{
    try{
        const filter = { name: req.body.name };
        const update = { img:req.body.img,Summary:req.body.Summary };
        
    
        let doc = await Mode.findOneAndUpdate(filter, update);
        // console.log("succesfully updated the value");
        logger.info("succesfully updated the value")

        res.status(200).send("succesfully updates ur value");
    }
    catch(err)
    {
        err.message="error in updating the detail";
        throw err;

    }
    
});


// getting data from the database'

app.get('/get_user_data',async (req,res)=>{
    try{
        let val;
        const [data,err]=await Mode.find({name:req.body.name});
        if(data)
        {
            val=data;
            console.log(data);
        }
        else{
            // console.log(err,'error in fetching data from db');
            logger.error('error in fetching data from db');

        }
        res.status(200).send(val);
    }
    catch(err)
    {
        err.message="error in getting user data";
        throw err;

    }
    

});

//crud operation for deleting the vaur using id of database

app.get('/delete_data/:id',function(req,res){
    try{
        let id=req.params.id;
        Mode.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                // console.log("error in deleting the data",err);
                looger.info('error in deleting the data');
                return res.status(401).send("error in deleting the value in db");
            }
            return res.status(200).send("succesfully deleted");
        })
    }
    catch(err)
    {
        err.message="error in deleting the data";
        throw err;
    }
})








app.listen(port,function()
{
    console.log('sever is runing on port',process.env.PORT);
})