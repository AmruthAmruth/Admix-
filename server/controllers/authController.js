import { User } from "../models/User.js";
import bcrypt from 'bcrypt'

export const uesrSignup=async(req,res)=>{
    const {name,email,phone,password}=req.body
    try{
         if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) { 
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

     const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

     const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    
       return res.status(201).json({ message: "User registered successfully" });

    }catch(err){
      console.error("Signup error:", err);
    return res.status(500).json({ message: "Server error" });
        
    }
}