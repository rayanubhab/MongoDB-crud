import mongoose from 'mongoose';

const progress_schema = new mongoose.Schema({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "student":{
        type:Boolean,
        default:true
    },
    "enrollment":{
        type:Number
        
    }
});

const progress_model = new mongoose.model("progress",progress_schema)

export default progress_model;

