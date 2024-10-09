const mongoose = require("mongoose")
const Schema = mongoose.Schema

const loginSchema = new Schema({
userName:{
    type:String,
    required:true
},passWord:{
    type:String,
    required:true
},
role:{
    type:String,
    default:"user"
},
})
const loginData = mongoose.model("Login",loginSchema)
module.exports = loginData
