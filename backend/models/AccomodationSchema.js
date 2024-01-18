const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const AccomodationSchema = new Schema({ 
    hotel_name: {
        type: String,
        required:true
    },
    details:{
        type: String,
        required:true
    },
    address:{
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
    stars:{
        type: Number,
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
module.exports= mongoose.model('Acommodation', AccomodationSchema);
