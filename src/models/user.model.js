const mongoose=require('mongoose')
const userCollection="Users"

const userShema= new mongoose.Schema({
    first_name:{type:String,required:true,max:20},
    last_name:{type:String,required:true,max:20},
    email:{type:String,required:true,max:30},
    phone:{type:Number,required:true},
    address:{type:String,required:true,max:50}

})

const userModel=mongoose.model(userCollection,userShema)
module.exports={userModel}