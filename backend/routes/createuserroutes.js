const express=require("express");
const Users = require("../models/User");
const router=express.Router();
const { body, validationResult } = require('express-validator');
const jwt= require("jsonwebtoken")
const JWTSECRET="Iamsujalchordiaandiamhavingagoodday"
const bcrypt= require("bcryptjs")




router.post("/createuser",[
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
            const newUsers=await Users.create({
                name: req.body.name,
                email: req.body.email,
                password: securedPassword,
            })
            const data={
                user:{
                    id:newUsers._id,
                }
            }
            const authToken=jwt.sign(data,JWTSECRET)
            res.json({success:true,authToken:authToken,data:{
                name: req.body.name,
                email: req.body.email,
                _id:newUsers._id}})
        }catch(err){
            console.log(err)
            res.json({
                success:false
            })
        }
    })

    router.get('/userdetails/:id', async (req, res) => {
        const userId = req.params.id;
      
        try {
          const user = await Users.findById(userId);
          if (!user) {
            return res.status(404).json({ error: 'User not found' });
          }
          res.status(200).json(user);
        } catch (error) {
          console.error('Error fetching user details:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });
    

router.post("/loginuser",[
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
            let userData=await Users.findOne({email})
            if(!userData){
                return res.status(400).json({ errors: "Try logging in with correct credentials" });
            }
            const cmprPassword=await bcrypt.compare(password,userData.password)
            if(!cmprPassword){
                return res.status(400).json({ errors: "Try logging in with correct password" });
            }
            const data={
                user:{
                    id:userData.id,
                }
            }
            const authToken=jwt.sign(data,JWTSECRET)
            if(cmprPassword){
            return res.json({success:true,authToken:authToken,data:{name:userData.name,email:userData.email,_id:userData.id}})
            }
        }catch(err){
            console.log(err)
            res.json({
                success:false
            })
        }
    })


module.exports=router