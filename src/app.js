const express=require('express')
const mongoose=require('mongoose')
const userRouter=require('./routes/users.router.js')
const productRouter=require('./routes/products.router.js')
const app=express()
const PORT=8050


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT} `)
})

app.use(express.json())

mongoose.connect('mongodb+srv://girmar14:d1CYrI8pl75TyQw5@e-commerce.s0glbx3.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Conectado a la BD de Mongo Atlas")
})
.catch(error=>{
    console.error("Error de conexión",error)
})

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)