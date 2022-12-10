// UNVERIFIED JOBS SCHEMA
const mongoose = require('mongoose')
const schema = mongoose.Schema

const jobSchema = new schema({
    jobTitle: String,
    qualification: String,
    experience: String,
    jobSector: String,
    companyName: String,
    location: String,
    closingDate: Date,
    skills:Array,
    description:String,
    salaryRange: String,
    postedBy: String,
})

let JOBDATA = mongoose.model('jobDataUV', jobSchema)
module.exports = JOBDATA