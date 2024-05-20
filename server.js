const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config({path:'./config.env'})
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/products', productRoute)

// Database starting and connection
const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD)
try{
    mongoose.connect(DB)
        .then(con=>{
            console.log('Connected to DATABASE')
        })
}catch(err){
    console.log('Error:',err.message)
}

const port=process.env.PORT;

app.get('/',(req, res) => {
    res.send('hello')
})













// Server starting and port that is used
app.listen(port,()=>{
    console.log(`Server runing at port: ${port}`);
})