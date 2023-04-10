import React, { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import '../css/Sign.css';
import Axios from 'axios';

function Signup() {
    const [loginStatus,setloginStatus]=useState("")
    const nav = useNavigate();
    const[variable,setVariable]=useState({
      email:"",
      password:"",
    })
    const handleChange = e=>{
      const {name,value}=e.target
      setVariable({...variable,[name]:value});
    }
    const login = (e) =>{
      e.preventDefault();
      if(variable.email == "" || variable.password == ""){
          alert("Please fill out the fields")
      }
        else{
        Axios.post("http://localhost:4000/login", {
            email: variable.email,
           password: variable.password,
           
        }).then((res)=> {
          console.log(res);
          console.log(res.data);
          if(res.data.isAdmin ===true) {
           console.log("ans",res.data.isAdmin);
          alert(" Admin Login Successfully");
          window.open('/admin', "_self");
          }
          else if(res.data.message ==="Invalid email or password"){
           alert("Login failed")
          }
          else if(res.data.message ==="Logged in successfully"){
          alert(" Login Successfully");
          window.open('/home', "_self");
          
          }
        });
      }
    }
  return (



<div class ="wrapper">
        <div class="container main">
            <div class="row">
                <div class="col-md-6 side-image">
                   
                    
                </div>
                <div class="col-md-6 right">
                     <div class="input-box">
                        <header>Login</header>
                        <div class="input-field">
                            <input type="text" name="email" class="input" id="email" value={variable.email} onChange={handleChange} required autocomplete="off"/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <input type="password" name="password" value={variable.password} onChange={handleChange} class="input" id="password" required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="button-field">
    
                                <button type="submit" className="submit"  onClick={login}>
                                    <text>Login</text>
                                <Link to ='/login'></Link>
                                </button>
        
                            
                        </div>
                        <div class="signin" style={{display:"flex",flexDirection:'row',justifyContent:"center"}}>
                            <text style={{marginRight:5}}>Dont have an account?</text>
                            <Link to='/regis'>Sign Up</Link>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <h2 style={{color:'red',fontSize:'15px', textAlign:'center', marginTop:'20px'}}>{loginStatus}</h2>
    </div>


  )
}

export default Signup
