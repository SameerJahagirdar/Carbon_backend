const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type : String,
            required : true
        },
        age : {
            type :  String,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        mobile : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true
        }
    },{timestamps : true}
)

const User = mongoose.model('data',userSchema)

module.exports = User