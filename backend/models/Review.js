const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const ReviewSchema = new Schema({ 
    product_id: {
        type: String,
        required:true
    },
    user_id:{
        type: String,
        required:true
    },
    review:{
        type: String,
        required:true
    },
    stars:{
        type: Number,
        required:true
    }
    });
module.exports= mongoose.model('Reviews', ReviewSchema);