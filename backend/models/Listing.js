const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const ListingSchema = new Schema({ 
    vendor_id: {
        type:String,
        required:true
     },
     Category:{
        type:String,
        require:true
     },
    cproduct_id:{
        type:Object,
        default:{},
     }
    });
module.exports= mongoose.model('Listing', ListingSchema);