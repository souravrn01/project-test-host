const express = require('express')
const router = express.Router()
const AluminiData = require('../models/alumniProfileUV')
const jwt = require('jsonwebtoken')





router.post('/aluminisignup', async (req, res) => {
    try {
        let item = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            highest_qualification: req.body.highest_qualification,
            course_started_at_ictak: req.body.course_started_at_ictak,
            batch_details: req.body.batch_details,
            placement_status: req.body.placement_status,
            company_name: req.body.company_name,
            password: req.body.password,
        }
        let user = await AluminiData.findOne({ email: req.body.email })
        if (!user) {
            const newuser = new AluminiData(item)
            const saveuser = await newuser.save()
            res.send(saveuser)
        }
        return res.json({ message:"Email already registered" });
    } catch (error)
{
        console.log('post error:',error)
    }
})

router.get('/aluminilist', async (req, res) => {
    try {
        let list = await AluminiData.find()
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})

router.get('/aluminis', async (req, res) => {       // getdata for admin to collect unverified alumni
    try {
        let list = await AluminiData.find({ approval_status: "not approved" })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})

router.get('/aluminiVer', async (req, res) => {       // getdata for admin to collect verified alumni
    try {
        let list = await AluminiData.find({ approval_status: "verified" })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
})


router.post('/singlealumni',async(req,res)=>{       //get singledata of alumni
    
    // console.log(req.body) 

    try{
        let data = await AluminiData.findOne({email:req.body.email,
            password:req.body.password,approval_status:"verified"})
            // let email=req.body.email;
            // let password=req.body.password;
        // let payload = {'email':req.body.email,'password':req.body.password,'date':Date.now()}
        //  let token = jwt.sign(payload,'secretkey')
        if(!data){
            return res.json({ message: " Admin didnot verified your data yet !!" });

        }else{

            res.send(data);
            //  res.send({ 'token': token});
        }
         
        
        
    }
    catch(error){
        console.log(error)
    }
})
//TODO: get single data from db  
router.get('/alumni/:id',(req,res)=>{
    try{
        AluminiData.findById({"_id":req.params.id}).then(function(data){
            res.send(data);
        })
    }
    catch(error){
        console.log(error);
    } 
})

router.put('/generaldata',async(req,res)=>{ //update one alumni general information
    try{
        console.log(req.body)
        let id = req.body.id
        let generaldata = {
            gender:req.body.data.gender,
            date_of_birth:req.body.data.date_of_birth,
            permanent_address:req.body.data.permanent_address,
            alternate_phone_number:req.body.data.alternate_phone_number,
            pincode:req.body.data.pincode,
            district:req.body.data.district,
            state:req.body.data.state,
            country:req.body.data.country,
        }
        let generaldatas = {$set:generaldata}
        let generaldataupdate= await AluminiData.findByIdAndUpdate({"_id":id},generaldatas,{new:true})
        res.send(generaldataupdate)
    }
    catch(error){
        console.log('update error : ',error)
    }
})
router.put('/alumnieducation', async (req, res) => { //for add education data of alumni
    try {
            console.log(req.body.data, req.body.id)
            let id = req.body.id;
            let updates = {education: req.body.data}
            let toUpdate = {$set: updates}
            let updated = await AluminiData.findByIdAndUpdate({"_id":id},toUpdate,{new:true})
            res.send(updated)
       }
       catch (error) {
       console.log('post error:', error);
}
})
router.put('/alumniexperience',async (req,res)=>{ //for update experience data of alumni
    try{
        console.log(req.body.data,req.body.id)
        let id = req.body.id;
        let update={experience:req.body.data}
        let experiencedatas={$set:update}
        let experiences= await AluminiData.findByIdAndUpdate({"_id":id},experiencedatas,{new:true})
        res.send(experiences)
        console.log(experiences)
    }
    catch (error) {
        console.log('post error:', error);
 }
})

router.put('/onealumni', async (req, res) => {    // for admin to get one alumni to verify
    try {

        console.log(req.body)
        let id = req.body._id
        let update = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            highest_qualification: req.body.highest_qualification,
            course_started_at_ictak: req.body.course_started_at_ictak,
            batch_details: req.body.batch_details,
            placement_status: req.body.placement_status,
            company_name: req.body.company_name,
            approval_status: req.body.approval_status,
            password: req.body.password
        }
        let updates = { $set: update }
        let verifiedAlumni = await AluminiData.findByIdAndUpdate({ "_id": id }, updates, { new: true })
        res.send(verifiedAlumni)
        
    } catch (error) {
        console.log('update error:', error);
    }
})

router.delete('/deletealumni/:id', async (req, res) => {        // for admin to delete alumni
    try {

        let id = req.params.id
        let data = await AluminiData.findByIdAndDelete(id)
        res.send(data)

    } catch (error) {
        console.log(error);
    }
})

module.exports = router;