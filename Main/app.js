const express = require('express')
const { result } = require('lodash')
const mongoose = require('mongoose')
const User = require('./models/user')
const bodyParser = require('body-parser');


const app = express()


const dbURI = 'mongodb+srv://Sameer123:sameer123@cluster0.tssquen.mongodb.net/Test?retryWrites=true&w=majority'
mongoose.connect(dbURI).then((result)=>{
    app.listen(3000)
}).catch((err)=>{
    console.log(err)
})
mongoose.set('strictQuery',true)



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.render('index')
})


app.post('/form',(req,res)=>{
    // const user = User({
    //     name : req.body.name,
    //     age : req.body.age,
    //     password : req.body.password,
    //     email : req.body.email,
    //     address : req.body.address,
    //     mobile : req.body.mobile
    // });
    // user.save().then((result)=>{
    //     res.send(result)
    // }).catch(
    //     (err)=>{
    //         console.log(err);
    //     }
    // )
    console.log(req.body)
    res.send(result)
})