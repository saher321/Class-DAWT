import { sendError, sendResponse, sendToken } from "../helper/sender.js";
import bcrypt from 'bcryptjs'
import Users from '../models/auth.model.js'

export const register =async (req,res)=>{
    try {

        const { name, email, password } = req.body;

        if (!name ||!email ||!password) {
            sendResponse(res, false, 'All fields are required')
        }


        const existingUser = await Users.findOne({ email });

        if (existingUser) {
            sendResponse(res, false, 'Email already exists')
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Users({ name, email, password: hashedPassword });
        await user.save();

        sendResponse(res, true, 'User registered successfully', user)
        
    } catch (error) {
        sendError(res,error)
    }
}

export const login =async (req,res)=>{
    try {

        const { email, password } = req.body;

        if (!email ||!password) {
            sendResponse(res, false, 'All fields are required')
        }


        const user = await Users.findOne({ email });
        if (!user) {
          return  sendResponse(res, false, 'Email Not exists')
        }

        if(user.isDelete){
        return sendResponse(res, false, 'User not exist')
        }

        const isMatch = user.isMatchPassword(password)

        if (!isMatch) {
          return  sendResponse(res, false, 'Incorrect password')
        }
        

        sendToken(res,user,'User logged in successfully' )
  
        
    } catch (error) {
        sendError(res,error)
    }
}

export const profile =async (req,res)=>{
    try {
        const user = await Users.findById(req.user._id).select('-password');
    
        if (!user) {
            sendResponse(res, false, 'User not found')
        }
        sendResponse(res,true, 'user profile', user)
        
    } catch (error) {
        sendError(res,error)
    }
}

export const update =async (req,res)=>{
    try {

        

        const {  password, oldPassword } = req.body;

        if (!oldPassword ||!password) {
            sendResponse(res, false, 'All fields are required')
        }


        const user = await Users.findById(req.user._id);
        if (!user) {
            sendResponse(res, false, 'invalid')
        }

        const isMatch = user.isMatchPassword(oldPassword)

        if (!isMatch) {
            sendResponse(res, false, 'Incorrect old password')
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const data ={
            password:hashedPassword
        }

        const update = await Users.findByIdAndUpdate({_id: req.user._id},data, {new :true} )
        

        sendToken(res,user,'User logged in successfully' )
  
        
    } catch (error) {
        sendError(res,error)
    }
}