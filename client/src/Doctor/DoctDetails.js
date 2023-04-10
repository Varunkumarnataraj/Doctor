import React,{useState,useEffect} from 'react';
import '../Doctor/DoctDetails.css';
import Axios from 'axios';

function DoctDetails() {

  const [doctor, setDoctor] = useState({
    docname:'',
    docage:'',
    docemail:'',
    docqualification:'',
    docexperience:'',
    docimage:'',
   
  });
 





  const handleInputChange = (e) => {
    setDoctor({
      ...doctor,
      [e.target.name]: e.target.value,
    });
  };

  

const addDoctor = async(e) => {
  e.preventDefault();
console.log(doctor);
if(doctor. docname ==="" ||doctor. docage ==="" 
 ||doctor. docemail ===""  || doctor. docqualification ==="" || doctor. docexperience ===""  )
    alert("fill the details")
else{
 console.log("hii")
  await Axios.post("http://localhost:4000/signup", {
    docname:doctor.docname,
    docage:doctor.docage,
    docemail:doctor.docemail,
    docqualification:doctor.docqualification,
    docexperience:doctor.docexperience,
    docimage:doctor.docimage
  
     }).then((response) => {
        if(response.data.statusCode!==200){
            console.log(response.data.message);
            alert("Doctor Added Successfully");
            fetchData();
           
        }else{
            console.log(response.data.message);
            
        }}
     )
      }
      };


      //get

      const [data, setData] = useState([]);
  useEffect(()=>{
  fetchData();
  },[])
  const fetchData = async() => {
  const getData = await fetch("http://localhost:4000/getdocdetails")
  const data = await getData.json();
  setData(data.data);
  }


  //delete

const deleteHandler= async (id)=>{

  try {

    if( window.confirm("Are you sure! You want to Delete this data?")){
     let res= await Axios.delete( `http://localhost:4000/deletedocdetails/${id} `)
     if(res.data.message=="Deleted Successfully"){
      alert(res.data.message)
     }else{
      alert("Error")
     }
    }
    else{
     alert("Canceled successfully")
    }
    console.log("Deleted Successfully!");
    fetchData();
  } catch (error) {
    console.log("Something went wrong", error)
  }
}



  return (
    <div>
   
      <div className='bikes'>
        <div className='collections'>
        <div className='table1'>
          <thead>
            <tr>
              
              <th style={{width:"10%"}}>Doctor_Name</th>
              <th style={{width:"12%"}}>Age</th>
              <th style={{width:"12%"}}>Email</th>
              <th style={{width:"5%"}}>Qualification</th>
              <th style={{width:"5%"}}>Experience</th>
              <th style={{width:"25%"}}>Image</th>
              <th style={{width:"33%"}}>Action</th>
            </tr>
            {data.map(i=>{
                return(
                <tr>
                  <td>{i.docname}</td>
                  <td>{i.docage}</td>
                  <td>{i.docemail}</td>
                  <td>{i.docqualification}</td>
                  <td>{i.docexperience}</td>
                  <td>
                  <img style={{width:"100%"}} src={i.docimage[0]}></img></td>
                  <td>   
                   <button className='delete' onClick={()=>deleteHandler(i._id)}>Delete</button></td>
                </tr>
                )
              })}
          </thead>
         </div>
          
        </div>

        <div className='bikeupdate'>
          <h3>Add Doctor</h3><br/>
          <div className='addbike'>
          <label>Doctor Name:</label><br/>
          <input type="text" name='docname' onChange={handleInputChange}></input><br/><br/>
          <label>Age:</label><br/>
          <input type="text" name='docage' onChange={handleInputChange}></input><br/><br/>
          <label>Email:</label><br/>
          <input type="text" name='docemail' onChange={handleInputChange}></input><br/><br/>
          <label>Qualification:</label><br/>
          <input type="text" name='docqualification' onChange={handleInputChange}></input><br/><br/>
          <label>Experience:</label><br/>
          <input type="text" name='docexperience' onChange={handleInputChange}></input><br/><br/>
          <label>Department:</label><br/>
          <select  className='drop' onChange={handleInputChange}  name='docdepartment'>
              <option value="someOption">Cardiology</option>
              <option value="otherOption">Gynocology</option>
              <option value="otherOption">Neurology</option>
              <option value="otherOption">Hematology</option>
              <option value="otherOption">Dermatology</option>
              <option value="otherOption">Pediatrician</option>
          </select><br/><br/>
          </div>
          <div className='image'>
            <label>Image:</label><br/>
            <input type="file" name='docimage' onChange={handleInputChange}></input><br/><br/>
          </div>
        <button><a href='/doctdetails' onClick={addDoctor}>Add</a></button>
          
          
        </div>
      </div>
    </div>
  )
}

export default DoctDetails