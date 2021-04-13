const { json } = require('body-parser');
const express = require('express');
const fs=require ('fs')
const router = express.Router();
const usersJson = JSON.parse(fs.readFileSync('../users.json').toString()) 


router.get('/',(req,res)=>{
    console.log(usersJson);
    return res.status(200).json({users : usersJson.users})
}).get('/:id',(req,res)=>{
    return res.status(200).json({user : usersJson.users[req.params.id]})
}).post('/addUser',(req,res)=>{
    usersJson.users.push(
        {"id":80,"name":"ksahdkja","capsule":50}
    )
    const data=JSON.stringify(usersJson)
    console.log('json'+data);
    //fs.writeFileSync('../users',data)
    return res.status(200).send('ok')
})

module.exports = router;
