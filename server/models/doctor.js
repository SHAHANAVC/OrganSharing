const mongoose = require("mongoose")
 const Schema = mongoose.Schema

 const doctorSchema = new Schema({
    commonKey:{
        type:Schema.Types.ObjectId,
        ref:"Login"
      },
    id:{
        type:String,
        required:true
    },
    d_name:{
        type:String,
        required:true
    },
    d_department:{
        type:String,
        required:true
    },
    d_email:{
        type:String,
        required:true
    },
    hospital:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },

 })
 const doctorData = mongoose.model("Doctor",doctorSchema)
 module.exports = doctorData