//MASTER API

const express = require('express')
const router = express.Router()

// below declare all required api
const mail = require('./nodemailerApi')
const verifiedJobs = require('./jobApi')
// const Alumini=require('./alumniApi')
const alumniUV = require('./alumniApiUV')
const employeuv=require('./employerProfileApiUV')
// const jobuv=require('./jobApiUV')
const applicationsUV=require('./applicationsApiUV')
const login=require('./login')
//use api
router.use('/login',login)
router.use('/nodemailer',mail)
router.use('/verifiedjobs',verifiedJobs)
// router.use('/Alumini',Alumini)
router.use('/alumniuv',alumniUV)

router.use('/employeuv',employeuv)
// router.use('/jobuv',jobuv)
router.use('/applicationsuv',applicationsUV)

const { route } = require('./nodemailerApi')
module.exports = router;

