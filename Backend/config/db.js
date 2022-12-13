const mongoose=require("mongoose")

require("dotenv").config()

const connection= mongoose.connect(process.env.Mongoose_url)

module.exports={connection}