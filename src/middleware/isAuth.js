import { sendResponse } from "../helper/sender.js";
import Users from '../models/auth.model.js'

import jwt from 'jsonwebtoken';


export const isAuth = async (req , res , next)=>{

    try {

        // Fetch the token from the request headers
        const token = req?.headers?.authorization?.split(' ')[1];
        
        if(!token ){
            sendResponse(res,false, "Unauthorized" ,);
        }

        // Validate the token using JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            sendResponse(res,false, "Invalid token" ,);
        }

        req.user = await Users.findById(decoded._id)

        next();


    } catch (error) {
        console.log(error.message)
    }

}