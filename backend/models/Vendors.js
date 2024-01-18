const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const VendorSchema = new Schema({ 
     name: {
        type: String,
        required:true
     },
     email: {
        type:String,
        required:true
     },
     password: {
        type:String,
        required:true
     },
     image: {
        type:String,
        default:""
     },
     Aadhar_image: {
        type:String,
        default:""
     },
     verified:{
        type:Boolean,
        default:false,
     },
     address:{
        type:String,
        default:false,
     }
    });
module.exports= mongoose.model('Vendor', VendorSchema);