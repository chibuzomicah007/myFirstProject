const express = require("express")
const app = express()
const port = process.env.PORT || 5000;
const dbConnect = require("./DB/dbconnect")
const Schema = require("./model/schema")

app.get("/" , async function(req, res){
    res.send("hello");
})



const starter = async(req, res)=>{
    try {
      const db= await dbConnect
      if(db){
        console.log("Database connected sucessfully.")
      }
      app.listen(port, ()=>console.log(`Server running on port ${port}`))
    } catch (error) {
        res.status(500).json({msg: 'An error occurred. Please try again.'})
    }
}


starter()
