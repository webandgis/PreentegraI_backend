const mongoose=require('mongoose')
const productCollection="products"

const productsSchema= new mongoose.Schema({
    name:{type:String,required:true,max:50},
    category:{type:String,required:true,max:20},
    price:{type:Number,required:true},
    stock:{type:Number,required:true,max:100},
    image:{type:String,required:true,max:100}
})

const productModel=mongoose.model(productCollection,productsSchema)
module.exports={productModel}