const express = require('express')
const app = express();
const mongoose=require('mongoose')
const cors=require('cors');
app.use(cors());



const port=4000;





app.listen(port, ()=> console.log(`server running on ${port}`))

mongoose.connect("mongodb://127.0.0.1:27017/docpat")
.then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());

//importing schema
require ("./models/user");

app.get('/userdata',(req,res)=>{
   User.find(req.body)
   .then((user)=>res.send(user))
   .catch((err)=>res.send(err))
  
})
app.post("/login",async(req,res)=>{
     const { mail, password } = req.body;
    const users = await User.findOne({ mail, password });
    if (!users) {
  return res.json({ message: 'Invalid email or password' });
 }
    await User.updateOne({ mail }, { $set: { loggedIn: true } });
    res.json({ message: 'Logged in successfully' ,userId :users._id, isAdmin : users.isAdmin});
    })

  
//posting user details
require("./models/user");
const User=mongoose.model("patient");
app.post("/register",async(req,res) =>{
    const{ username,
        email,
        mobileNumber,
        age,
        gender,
        password,
        confirmPassword,
        address } = req.body;
    try{

        const exitingUser=await User.findOne({email});

        if(exitingUser){
            return res.json({message:"user email id already exists"});
        }

   
        await User.create({
            username,
            email,
            mobileNumber,
            age,
            gender,
            password,
            confirmPassword,
            address
        });
        res.send({message:"successfully registered"})
    }catch(error){
        console.log(error)
        res.send({status:"error"})
    }
});



//get user detail
app.get("/getpatientdetails",async(req,res)=>{
    try{  
  const patientDetails=await User.find(); 
    res.send({status:"ok",data:patientDetails});  
   }catch(error){ 
  console.log(error); 
    }
   })
    


//API for doctor details
require("./models/doctor");
const Doctor=mongoose.model("doctor");
app.post("/signup",async(req,res)=>{
    const{docname,docage,docemail,docqualification,docexperience,docimage}=req.body;

try{
    await Doctor.create({
        docname,
        docage,
        docemail,  
        docqualification,
        docexperience,
        docimage
    });
    res.send(
        {status:"Ok"}

    )

}
catch(error){
    console.log("err",error)
     res.send({
        status:"Error"
     })
}
});


// to get doctor details


app.get("/getdocdetails",async(req,res)=>{
    try{  
  const docDetails=await Doctor.find(); 
    res.send({status:"ok",data:docDetails});  
   }catch(error){ 
  console.log(error); 
    }
   })


   // dELETE DOCTOR DETAILS
   
    //delete car details

    app.delete("/deletedocdetails/:id",async (req,res)=>{

        try{
  
          const deleteDoc = await Doctor.findByIdAndDelete(req.params.id);
          if(!req.params.id){
            return res.status(400).send({message:"error"});
          }
          res.send({message:"Deleted Successfully"});
        }catch(e){
          res.status(500).send(e);
        }
       })

   
//API for hospital details
require("./models/hospital");
const Hospital=mongoose.model("hospital");
app.post("/dashboard",async(req,res)=>{
    const{ deptname,img}=req.body;

try{
    await Hospital.create({
        deptname, 
        img
       
       
    });
    res.send(
        {status:"Ok"}

    )

}
catch(error){
     res.send({
        status:"Error"
     })
}
});






app.get("/getdept",async(req,res)=>{

    try{
        const hospital= await Hospital.find({})
        return res.json({hospital});
     }
     catch(error){
    return res.status(400).json({message:error});

    }
});

app.get("/getdeptbyid/:deptid",async(req,res)=>{

    const deptid = req.params.deptid
    
    try{
        const dept= await Hospital.findOne({"_id":deptid});
        return res.send({dept});
     }
     catch(error){
        console.log(error)
    return res.status(400).json({message:error});

    }
});



