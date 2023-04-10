const {timestamp} =require ('console')
const mongoose=require('mongoose')

const hospitalInfo = mongoose.Schema({
    hoscat:{
        type:String,
        required:true
    },
    catimg:{
        type:Array,
        required:true
    },
    tech:{
        type:Array,
        required:true
    }
}
)
module.exports=mongoose.model('hospital',hospitalInfo)