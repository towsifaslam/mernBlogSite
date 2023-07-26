const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv')
 dotenv.config()
const cors = require('cors')

const authController = require('./controller/authController')
const blogController = require('./controller/blogController')
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authController)
app.use('/blog',blogController)
// connect db
// mongoose.set('strictQuery',false)
// mongoose.connect(process.env.MONGO_URL)
//           .then(()=>{
//             app.listen(8000,()=> console.log('server has been start'))
//           })
//           .catch(()=>console.log('not connect'))
 
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
          console.log('connection')
        })
        .catch(()=>{
          console.log('not connection')
        });

 

        

app.listen(8000,()=>console.log('hellwo'))