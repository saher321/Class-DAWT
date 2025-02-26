import mongoose from "mongoose";


const productSchema = new mongoose.Schema({

    salesManId : String,
    productName : String,
    productPrice : Number,
    productQuantity : Number,
    productCategory : String,
    productDescription : String,
    createAt : { type: Date, default: Date.now }
})

export default mongoose.model('Product', productSchema);