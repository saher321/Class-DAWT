
import { sendError, sendResponse } from '../helper/sender.js';
import Product from '../models/sales.model.js'

export const addProduct = async(req, res)=>{
    
    try {

        const { name, price, description, quantity } = req.body;


        const addProduct = new Product({
            salesManId: req.user._id,
            name,
            price,
            description,
            quantity
        })

        await addProduct.save();

    } catch (error) {
        sendError(res, error)
    }
    

}

export const getProduct = async(req, res)=>{
    
    try {


        const product = await Product.findById({salesManId:req.user._id});

        if(!product){
            return sendResponse(res,false, 'product not found')
        }
        return sendResponse(res,true, 'all product', product)

    } catch (error) {
        sendError(res, error)
    }
    

}