const mongoose = require('mongoose')
const Schema = mongoose.Schema
 
const organSchema = new Schema({
    organ_id:{
        type:String,
        required:true
    },
    hospitalId:{
        type:String,
        required:true
    },
    user_id:{
        type:String,
        required:true
    },
    donator_name:{
        type:String,
        required:true
    },
    donator_email:{
        type:String,
        required:true
    },
    donator_phone:{
        type:String,
        required:true
    },
    donator_adhar:{
        type:String,
        required:true
    },
    donator_city:{
        type:String,
        required:true
    },
    donator_state:{
        type:String,
        required:true
    },
    donator_organ:{
        type:String,
        required:true
    },
    donator_blood:{
        type:String,
        required:true
    },
    donator_address:{
        type:String,
        required:true
    },
    donator_age:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'Available'
    }
})

const organData = mongoose.model('DonateOrgan',organSchema)
module.exports =organData
