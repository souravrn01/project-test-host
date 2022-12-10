// UNVERIFIED ALUMNI PROFILE SCHEMA DESIGN 
const mongoose=require('mongoose')
const schema=mongoose.Schema

const alumniSchema= new schema({   
    name:String,
    email:String,
    phone:Number,
    gender:String,
    date_of_birth:Date,
    marital_status:String,
    permanent_address:String,
    alternate_phone_number:Number,
    pincode:Number,
    district:String,
    state:String,
    country:String,
    profile:String,
    education :[
        {
            qualification:{
                type: String,
                default: ""
            },
            completion_status:{
                type: String,
                default: ""
            },
            main_stream:{
                type: String,
                default: ""
            },
            specialization:{
                type: String,
                default: ""
            },
            university:{
                type: String,
                default: ""
            },
            percentage:{
                type: Number,
                default:  0
            },
            year_of_pass:{
                type: Number,
                default: 0
            }  
        }
    ],
       
    experience :[
        {
            company:{
                type: String,
                default: ""
            },
            Designation:{
                type: String,
                default: ""
            },
            presently_working:{
                type: String,
                default: " "
            },
            starting_date:{
                type: Date,
                default: ""
            },
            ending_date:{
                type: Date,
                default: ""
            },
            current_monthly_salary:{
                type: Number,
                default: 0
            },
            notice_period:{
                type: Number,
                default: 0
            },
        } 
    ],
   
    highest_qualification:{
                type: String,
                default: ""
            },
    course_started_at_ictak:{
                type: String,
                default: ""
            },
    batch_details:{
                type: String,
                default: ""
            },
    placement_status:{
                type: String,
                default: ""
            },
    company_name:{
                type: String,
                default: ""
            },
    approval_status:{
        type: String,
        default: "not approved"
    },
    usertype:{
        type:String,
        default:"alumni"
    },
    password:String
})

let aluminiData=mongoose.model('Alumini_Details',alumniSchema)
module.exports=aluminiData