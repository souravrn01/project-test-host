const express=require('express')
const router=express.Router()
const EmployeData=require('../models/employerProfileUV')
const jwt=require('jsonwebtoken')



router.get('/employelist',async(req,res)=>{
    try {
        let list=await EmployeData.find()
        res.send(list)
    } catch (error) {
       console.log(error) 
    }
})

router.get('/employers',async(req,res)=>{       // getdata for admin to collect unverified employer
    try {
        let list=await EmployeData.find({approval_status: "not approved"})
        res.send(list)
    } catch (error) {
       console.log(error) 
    }
})

router.get('/employersV',async(req,res)=>{       // getdata for admin to collect unverified employer
    try {
        let list=await EmployeData.find({approval_status: "verified"})
        res.send(list)
    } catch (error) {
       console.log(error) 
    }
})


router.get('/employesignup/:id',async(req,res)=>{
    try {
        let id=req.params.id
        const singleEmploye=await  EmployeData.findById(id)
        res.send(singleEmploye)
    } catch (error) {
        console.log(error)
    }
})

router.delete('/deleteemployer/:id', async(req,res)=>{    // admin deleting employer
    try {
        let id = req.params.id
        let data = await EmployeData.findByIdAndDelete(id)
        res.send(data)

    } catch (error) {
        console.log(error)
    }   
})


router.put('/verifyemp', async(req,res)=>{    // for admin to get employer to verify
    try {

        console.log(req.body)
        let id = req.body._id
        let update = { 
            name: req.body.name,
            email: req.body.email,
            phone:  req.body.phone,
            company: req.body.company,
            approval_status:  req.body.approval_status,
            password:  req.body.password,
            designation: req.body.designation
        }
        let updates = {$set: update}
        let verifiedEmp = await EmployeData.findByIdAndUpdate({"_id": id}, updates,{new:true})
        res.send(verifiedEmp)

} catch (error) {
    console.log('update error:',error);
}})

router.get('/singleemp',async(req,res)=>{       //get singledata of alumni
    try{
        let data = await EmployeData.findOne({email:req.body.email,password:req.body.password})
        res.send(data)
    }catch(error){
        console.log(error)
    }
})

    router.post('/employesignup', async (req, res) => {
    try {
        let item = {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            company:req.body.company,
            designation:req.body.designation,
            password:req.body.password
        }
        let user = await EmployeData.findOne({ email: req.body.email })
        if (!user) {
            const newuser = new EmployeData(item)
            const saveuser = await newuser.save()
            res.send(saveuser)
        }
        return res.json({ message:"Email already registered" });
    } catch (error)
{
        console.log('post error:',error)
    }
})


//EMPLOYEE LOGIN CHECK
router.post('/emplogin', async (req, res) => {
    try {
        let user = await EmployeData.findOne({ 
            email: req.body.email, 
            password: req.body.password})
        if (!user) {
            return res.json({ message: "Invalid username or password" });


        }
        res.send(user)
    } catch (error) {
        console.log(error)
    }
})
router.post('/employe', async (req, res) => {
    try {
        let user = await EmployeData.findOne({ 
            email: req.body.email, 
            password: req.body.password,approval_status:"verified"})
            let email=req.body.email;
            let password=req.body.password;
            let payload = {
                'email':req.body.email,
                'password':req.body.password,
                'date':Date.now()}
                let token =await jwt.sign(payload,'secretkey')
        if (!user) {
            return res.json({ message: "Invalid username or password or admin didnot verified yet" });


        }
        res.send({token,user})
    } catch (error) {
        console.log(error)
    }
})
module.exports=router;
