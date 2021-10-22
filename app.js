import express, { urlencoded } from 'express';
import mongoose from 'mongoose';
import progress_model from './progress.js';
const url ='mongodb+srv://rayanubhab:10thjune@crud.tsfwq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();
app.use(express.json({extended:"true"})); //Body parser
app.use(express.urlencoded({extended:"true"})); 

mongoose.connect(url,{useNewUrlParser: true});
const con = mongoose.connection;

con.once('open', () => {
    console.log('Connected to database')
})

app.post('/', (req,res)=>{

    const data = req.body
    
    const newentry1 = new progress_model({
        name:data.name,
        email:data.email,
        student:data.student,
        enrollment: data.enrollment
    })
    
    newentry1.save().then((result)=>{
     res.send(result);
    }).catch((err)=>{
         res.send(err);
    })

})

app.listen(3000,()=>{
   
    console.log("App is listening");

})
