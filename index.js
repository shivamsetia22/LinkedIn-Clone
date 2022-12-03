import express from 'express';
import UserModel from './models/userModel';

const app = express();
const port = 8000;


app.use(express.json());

app.get('/',(req,res)=>{
    return res.json('Hello World')
})

app.post("/user",async (req,res)=>{
    const data = req.body;
    try {
        const user = new UserModel(data);
        user.password=await bcrypt.hash(user.password, 10);
        await user.save();
        return res.status(201).json(user);
    } catch (error) {
        console.log(error.status,">>>")
        return res.status(400).json(error.message)
    }
})

app.put("/user/:email", async (req,res)=>{
    try {
        const user = await UserModel.findOne({email:req.params.email});
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        user.profileUrl = req.body.profileUrl || user.profileUrl;
        user.experiences = req.body.experiences || user.experiences;
        user.skills = req.body.skills || user.skills;
        user.educations = req.body.educations || user.educations;
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(erros.status || 500).json({message:erros.message});
    }
})

app.listen(8000,(err)=>console.log(`started at ${port}`,err))