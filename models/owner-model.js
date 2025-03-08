const mongoose=require('mongoose');

const ownerSchema=mongoose.Schema({
    fullname:{
        type:String,
        minLength:3,
        trim:true,
    },
    password:String,
    email:String,
    products:{
       type:Array,
       default:[]
    },
    picture:String,
    gstin:String,
});

module.exports=mongoose.model("owner",ownerSchema);
