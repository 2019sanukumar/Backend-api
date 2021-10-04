const mongoose=require('mongoose');
const multer=require('multer');
const path=require('path');
const img_path=path.join('/image');

const askedShema=new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    img:{
        type:String,
        // required:true
    },
    Summary:{
        type:String,
        required:true
    }

});


let storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.join(__dirname,'.',img_path));
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now());
    }
});

//static function
askedShema.statics.uploadedimage=multer({storage:storage}).single('img');
askedShema.statics.image_path=img_path;


const Ask=new mongoose.model('Ask',askedShema);
module.exports=Ask;