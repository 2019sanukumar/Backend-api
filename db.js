require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connected to database");
}).catch((e)=>{
    console.log("error in connecting databse",e);
});