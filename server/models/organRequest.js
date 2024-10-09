const mongoose = require('mongoose')
const Schema = mongoose.Schema

const organRequest = new Schema({
    organ_id:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    patient_name:{
        type:String,
        required:true
    },
    patient_email:{
        type:String,
        required:true
    },
    patient_phone:{
        type:String,
        required:true
    },
    patient_adhar:{
        type:String,
        required:true
    },patient_city:{
        type:String,
        required:true
    },
    patient_state:{
        type:String,
        required:true
    },
    patient_organ:{
        type:String,
        required:true
    },
    patient_blood:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    patient_address:{
        type:String,
        required:true
    },
    patient_age:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Pending'
    },
    assignedDoctor: { type: String }

})
const organRequestData = mongoose.model('OrganRequest',organRequest)
module.exports=organRequestData