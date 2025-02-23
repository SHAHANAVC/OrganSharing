const mongoose = require('mongoose')
const Schema = mongoose.Schema

const locationSchema = new Schema({
    id:{type:String,
        required:true
    },
    hospitalName: {type:String,
            required:true
    },
    location:{type:String,
            required:true
     }
})

const locationData = mongoose.model('Location',locationSchema)
module.exports=locationData