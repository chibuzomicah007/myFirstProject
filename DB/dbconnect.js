const mongoose = require('mongoose')


const dbConnect = (req, res)=>{
    return mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true } )
} 

module.exports = dbConnect