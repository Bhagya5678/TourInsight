const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const Categoryschema = new Schema({ 
     category: {
        type: String,
        required:true
     }
    });
module.exports= mongoose.model('category', Categoryschema);