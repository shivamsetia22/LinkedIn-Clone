import mongoose from "mongoose";

const  experience = mongoose.Schema({
    organizationName:{
        type:String,
        minLength:3,
        maxLength:100,
        required:true
    },
    designation:{
        type:String,
        minLength:5,
        maxLength:100,
        required:true
    },
    startAt:{
        type:Date,
        required:true
    },
    startAt:{
        type:Date,
    },
    startAt:{
        type:Boolean,
        default:true
    },
    address:{
        city:String,
        state:String,
        country:String
    },
    workDesc:{
        type:String,
        maxLength:150
    }
})

const education = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150 
    },
    email:{
        type:String,
        required:true,
        minLength:6,
        maxLength:150
    },
    password:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150
    },
    metaInfo:{
        type:String,
        maxLength:200
    },
    skills:[String],
    experience:[experience]
})

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150 
    },
    email:{
        type:String,
        required:true,
        minLength:6,
        maxLength:150
    },
    password:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150
    },
    metaInfo:{
        type:String,
        maxLength:200
    },
    skills:[String],
    experience:[experience]
})

userSchema.pre('save',async function(next){
    console.log(this,">>>>>>>>>>>>",this.isNew,this.isModified('password'))
    if(this.isNew || this.isModified('password')){
        this.password=await
    }
})

const UserModel = mongoose.model('User',userSchema);

export default UserModel;