// UNVERIFIED EMPLOYER SCHEMA
const mongoose=require('mongoose')
const schema=mongoose.Schema
const employeSchema= new schema({
    name:String,
    email:String,
    phone:String,
    company:String,
    password:String, 
    designation:String,
    usertype:{
        type:String,
        default:"employee"
    },
    approval_status:{
        type: String,
        default: "not approved"
    },
})

let employeData=mongoose.model('Employe_Details',employeSchema)
module.exports=employeData