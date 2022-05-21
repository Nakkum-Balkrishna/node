const express = require('express')
const router = express.Router()


router.post('/',(req,res)=>{
    console.log(req.body)
    const {name} = req.body
    if(name){
        res.send(`welcome buddy ${name}`)
    }else{
        res.status(404).send("Please provide name ")
    }
    res.send("POST")
})

module.exports = router