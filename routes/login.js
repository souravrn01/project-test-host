const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

email='admin@gmail.com';
password='Admin@123';

router.post('/loginadmin',async(req,res)=>{
    try{
        // console.log('From frontend auth token',req.headers.authorization)
        
        if(email===req.body.email && password===req.body.password){
            let payload= {
                'email':email,
                'password':password,
                'date':Date.now()
            }
            let token = await jwt.sign(payload,'secretKey')
            res.send({token})
        }
        else{
            return res.json({ message: " Invalid Username and password !!" });
        }
       
    }  
        catch(error){
            console.log(error)
        }
    
    
})


//middleware
// function verifytoken (req, res, next) {
//     console.log('headers=', req.headers.authorization);
//     if (!req.headers.authorization) {
//         return res.status(401).send('Unautherized request');
//     }
//     let token = req.headers.authorization
//     if (token == null) {
//         return res.status(401).send('Unautherized request');
//     }
//     let payload = jwt. verify(token ,'secretkey');
//     console.log("payload=", payload);
//     if (!payload) {
//         return res.status(401).send('Unautherized request');
//     }
//     console.log("payload.subject=", payload.subject);

//     req.userId = payload.subject;
//     next();

// }


module.exports = router