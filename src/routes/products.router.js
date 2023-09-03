const {Router}=require('express')
const {productModel}=require('../models/product.model.js')
const router=Router()

//enpoint Get

router.get("/",async(req,res)=>{
    try{
        let products=await productModel.find()
        res.send({result:"success",payload:products})

    }catch(error){
        console.log("error con el producto ingresado")

    }
})

//endpoint post

router.post("/",async(req,res)=>{
    try{

        let {name,category,price,stock,image}= req.body
        if(!name||!category||!price||!stock||!image){
            res.send({status:"error",error:"parametros faltantes al intentar añadir el product"})
        }

        let result=await productModel.create({name,category,price,stock,image})
        res.send({result:"success",payload:result})


    }catch(error){

    }

 //endpoint put
 router.put("/:uid",async(req,res)=>{
    let {uid}=req.params
    let productReplace=req.body

    if(!productReplace.name||!productReplace.category||!productReplace.price||!productReplace.stock||!productReplace.image){
     res.send({result:"error",error:"le faltan parametros al producto"})
    }

    let result= await productModel.updateOne({_id:uid},productReplace)
    res.send({result:"success",payload:result})
 })   

 router.delete("/:uid",async(req,res)=>{
    let {uid}=req.params
    let result=await productModel.deleteOne({_id:uid})
    res.send({result:"success",payload:result})
 })
})

module.exports=router