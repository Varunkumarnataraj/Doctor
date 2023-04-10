const {timestamp} =require ('console')
const mongoose=require('mongoose')

const doctorschema = mongoose.Schema({
    docname:{
        type:String,
        required:true
    },
    docage:{
        type:String,
        required:true
    },
    docemail:{
        type:String,
        required:true
    },
    docqualification:{
        type:String,
        required:true
    },
    docexperience:{
        type:String,
        required:true
    },
    docimage:{
        type:Array,
    }
},
    {
    collection :"doctor",
    }

)
module.exports=mongoose.model('doctor',doctorschema)
