const express=require("express");
const router=express.Router();
const User=require("../models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const {check,validationResult}=require("express-validator");
const config=require("config");

router.post("/",[
	check("name","enter the name").not().isEmpty(),
	check("email","Please enter the Email").isEmail(),
	check("password","please enter more than 6 characters").isLength({min:6})
],async (req,res)=>{
	const errors=validationResult(req);
	if(!errors.isEmpty())
		{
			return res.status(404).json({errors:errors.array()});
		}
	const {email,password,name}=req.body;
	try{
		let user=await User.findOne({email});
		if(user)
			{
				return res.status(404).json({msg:"User already exists"});
			}
		user=new User({
			name,
			email,
			password
		});
		const salt=await bcrypt.genSalt(10);
		user.password=await bcrypt.hash(password,salt);
		await user.save();
		
		const payload={
			user:{
				id:user.id,
			}
		}
		jwt.sign(payload,config.get("jwtSecret"),{expiresIn:360000},(err,token)=>{
			if(err) throw err;
			res.json({token});
		})
	}
	catch(err){
		console.error(err.message);
		res.status(500).send("server error");
	}
	
	
});



module.exports=router;