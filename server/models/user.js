const {timestamp} =require ('console')
const mongoose=require('mongoose')

const patientschema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    
},
    {
    collection :"patient",
    }

)
module.exports=mongoose.model('patient',patientschema)
