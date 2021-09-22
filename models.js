const mongoose=require('mongoose');

const askedShema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    Summary:{
        type:String,
        required:true
    }

});

const Ask=new mongoose.model('Ask',askedShema);
module.exports=Ask;