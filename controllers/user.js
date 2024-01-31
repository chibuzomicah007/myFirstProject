const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const User = require("../model/schema")

const registerUser = async(req, res)=>{
    const {username, email, password}= req.body;
    //To check if the user does not submit all the necessary credentials
    if(!username || !email || !password){
        res.status(400).json({msg: "All messages are required."})
    }

    const userexist = User.findOne({username})
    if(userexist){
        res.status(409).json({msg: "This user already exists."})
    }

    const createdUser = new User.create({username, email, password})
    if(createdUser){
        await createdUser.save()
    }

}