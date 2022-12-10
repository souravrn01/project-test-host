// const express=require('express')
// const router=express.Router()
// const jobData=require('../models/jobsUV')

// router.get('/joblist',async (req,res)=>{
//     try {
//         let jobs=await jobData.find()
//         res.send(jobs)
//     } catch (error) {
//         console.log('get error:',error)
//     }
// })
// router.post('/job',async(req,res)=>{
//     try {
//         let data={
//             jobTitle: req.body.jobTitle,
//             qualification: req.body.qualification,
//             experience: req.body.experience,
//             jobSector: req.body.jobSector,
//             companyName: req.body.companyName,
//             location: req.body.location,
//             closingDate:req.body.closingDate,
//             skills:req.body.skills,
//             description:req.body.description,
//             salaryRange: req.body.salaryRange,
//             postedBy: req.body.postedBy
//         }
//         let newJob=new jobData(data)
//         const saveJob= await newJob.save()
//         res.send(saveJob)
//     } catch (error) {
//         console.log('post error:',error)
//     }
// })
// router.get('/job/:id',async(req,res)=>{
//     try {
//         let id=req.params.id
//         let singleJob=await jobData.findById(id)
//         res.send(singleJob)
//     } catch (error) {
//         console.log('single error:',error)
//     }
// })
// router.put('/job',async(req,res)=>{
//     try {
//         let data=req.body
//         let updatedata=await jobData.findOneAndUpdate({"_id":req.body._id},data)
//         res.send(updatedata)
//     } catch (error) {
//         console.log('update error:',error)

//     }
// })
// router.delete('/job/:id',async (req,res)=>{
//     try {
//         let id=req.params.id
//         let deleteJob=await jobData.findByIdAndDelete(id)
//         res.send(deleteJob)
//     } catch (error) {
//         console.log('delete error:',error)
//     }
// })

// module.exports=router;