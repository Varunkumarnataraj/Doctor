import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import '../Patient/CopyView.css';


axios.defaults.baseURL = 'http://localhost:4000';

function CopyView() {

const[loading,setloading]=useState(false);
const[error,seterror]=useState();
const[dept,setdept]=useState([]);
const {deptid} = useParams();

const api =async function api(){
const details= await axios.get(`/getdeptbyid/${deptid}`)
console.log("details",details?.data.dept)
setdept([details?.data.dept]);
setloading(false)
}



useEffect(() => {
  api();

console.log("lett api  get dept",dept)
 try{
  setloading(true);
  
 }
 catch(err){
  setloading(true);
  seterror(true);
 }
    
},[])

  
   
 return (
    <div className='booking-page'>
       {dept &&dept.length>0 && dept.map((dept) => (
     
     <div className='row'>
      <div className='col-md-5'>
       
        { <img src={ dept?.docimg?.length &&dept?.docimg[0]} className='doc-pic'></img> }
         <div className='name'><h2>{dept.docname}</h2></div>
      </div>

      <div className='col-md-6'>
        <div className='para'>
        <h2>Doctor Details</h2>
        <h5>Qualification : <div className='doc'> {dept.docq}</div></h5>
        <h5> Specification :<div className='doc'> {dept.spec}</div></h5>
        <h5> Experience : <div className='doc'>{dept.exp}</div></h5>
        </div>
       <Link to="/appointment"><button className="detailsbook">Meet Doctor</button></Link>
        </div>
     </div>))}
    

    </div>
  )
}

export default CopyView