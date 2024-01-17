const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const Userschema = new Schema({ 
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
     emergencyContacts: {
        type:Array,
        default:[]
     },
     blocked:{
        type:Boolean,
        default:false,
     },
     previousbooking:{
        type:Array,
        default:[],
     }
    });
module.exports= mongoose.model('user', Userschema);