const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/asked',{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connected to database");
}).catch((e)=>{
    console.log("error in connecting databse",e);
});