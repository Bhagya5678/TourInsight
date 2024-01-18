const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const Transportation = new Schema({ 
    transportation_name: {
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
    booked_dates:{
        type: Array,
        required:true
    },
    location:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    reviews:{
        type:Array,
        required:true
    }
    });
module.exports= mongoose.model('transportation', Transportation);