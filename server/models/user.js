const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    commonKey:{
        type:Schema.Types.ObjectId,
        ref:"Login"
      },
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  place:{
    type:String,
    required:true

},
gender:{
    type:String,
    required:true
},
age:{
    type:String,
    required:true

},
  adharNumber: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,

},
 
});
const userData = mongoose.model('User',userSchema)
module.exports = userData
