import React from 'react'
import "../css/Admin.css"
import { Link } from 'react-router-dom'



function Admin() {
    return (

<div className='frame'>
    <nav>
      <div class="logo">
         <p><span>a</span> cura</p>
      </div>
      <div class="meenu">
      <ul>
        <Link to='/patientview'><li><a href="#">Patient Details</a></li></Link>

         <li><a href="/doctdetails">Doctor Details</a></li>
        

        
        


        <div className='booking'>
        <li><a href="#">Appointments</a></li>
        <div className='menu4'> 
        <a href="#">Patient Registration</a>
        <a href="#">Doctor Availability</a>
        <a href="#">Payment</a>
        </div>
        </div>



      </ul>
      <div className='welcome'>
      <p>Welcome Admin</p>
      </div>
     
      <div className='logout'>
      <Link to='/logout'><a href="#"><button class="btn">LOGOUT</button></a></Link>
      </div>

      

      </div>
    </nav>
    
</div>

    )
}
export default Admin
