const {timestamp} =require ('console')
const mongoose=require('mongoose')

const hospitalschema = mongoose.Schema({
    deptname:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    docname:{
        type:String,
        required:true
    },
    docimg:{
        type:Array,
        required:true
    },
    docq:{
        type:String,
        required:true
    },
    spec:{
        type:String,
        required:true
    },
    exp:{
        type:String,
        required:true
    }
},
    {
    collection :"hospital",
    }

)
module.exports=mongoose.model('hospital',hospitalschema)
