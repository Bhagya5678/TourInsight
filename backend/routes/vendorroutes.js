const express=require("express");
const Vendors=require("../models/Vendors")
const router=express.Router();
const { body, validationResult } = require('express-validator');
const jwt= require("jsonwebtoken")
const JWTSECRET="Iamsujalchordiaandiamhavingagoodday"
const bcrypt= require("bcryptjs")




router.post("/createvendor",[
    body('email').isEmail(),
    body('password',"Incorrect Password").isLength({ min: 5 }),
    body('name').isLength({ min: 5 })],
        async(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const salt=await bcrypt.genSalt(10);
        let securedPassword= await bcrypt.hash(req.body.password,salt)
        try{
            const newVendors=await Vendors.create({
                name: req.body.name,
                email: req.body.email,
                password: securedPassword,
            })
            const data={
                user:{
                    id:newVendors._id,
                }
            }
            const authToken=jwt.sign(data,JWTSECRET)
            res.json({success:true,authToken:authToken,data:{
                name: req.body.name,
                email: req.body.email,
                _id:newVendors._id}})
        }catch(err){
            console.log(err)
            res.json({
                success:false
            })
        }
    })

    

router.post("/loginvendor",[
    body('email').isEmail(),
    body('password',"Incorrect Password").isLength({ min: 5 })],
        async(req,res)=>{
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        let email =req.body.email;
        let password=req.body.password
        try{
            let vendorData=await Vendors.findOne({email})
            if(!vendorData){
                return res.status(400).json({ errors: "Try logging in with correct credentials" });
            }
            const cmprPassword=await bcrypt.compare(password,vendorData.password)
            if(!cmprPassword){
                return res.status(400).json({ errors: "Try logging in with correct password" });
            }
            const data={
                user:{
                    id:vendorData.id,
                }
            }
            const authToken=jwt.sign(data,JWTSECRET)
            if(cmprPassword){
            return res.json({success:true,authToken:authToken,data:{name:vendorData.name,email:vendorData.email,_id:vendorData.id}})
            }
        }catch(err){
            console.log(err)
            res.json({
                success:false
            })
        }
    })


module.exports=router