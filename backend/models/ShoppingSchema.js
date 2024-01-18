const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const Shopping = new Schema({ 
    Shopping_name: {
        type: String,
        required:true
    },
    details:{
        type: String,
        required:true
    },
    image:{
        type: Array,
        required:true
    },
    location:{
        type: String,
        required:true
    }
    });
module.exports= mongoose.model('Shopping', Shopping);