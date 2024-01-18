const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const Tourist = new Schema({ 
    Tourist_name: {
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
module.exports= mongoose.model('Tourist', Tourist);