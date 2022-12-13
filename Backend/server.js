const express=require("express")

const app=express()


const {connection}=require("./config/db")
 

const {userRouter}=require("./Router/User.router")




require("dotenv").config()

const PORT=process.env.Port || 8400

app.use(express.json())
app.get("/",(req,res)=>{
  res.send("welcome")
})

 app.use("/user",userRouter)




app.listen(PORT,async()=>{
  try{
    await connection
    console.log("db is connect sucessfully")
  }
  catch(err){
    console.log("db is fail")
    console.log(err)
  }
  console.log(`${PORT} runing succesful`)
})