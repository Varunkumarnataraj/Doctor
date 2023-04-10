import React from 'react'
import "../css/Doctor.css";
import { Link } from 'react-router-dom'



function Doctor() {
    return (

<div className='coverful'>
    <nav>
      <div class="logo">
         <p><span>a</span> cura</p>
      </div>
      <div class="meenu">
      <ul>
      
       

        
        <li><a href="#">Patient Details</a></li>
       


        
        
        

        
        
        <li><a href="#">New Appointments</a></li>
       


        
        <li><a href="#">My Schedule</a></li>
        



      </ul>
     
      <div className='logout'>
      <Link to='/logout'><a href="#"><button class="btn">LogOut</button></a></Link>
      </div>
      </div>
    </nav>
    
</div>

    )
}
export default Doctor
