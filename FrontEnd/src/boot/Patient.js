import React from 'react';
import "../css/Home.css";
import { Link } from 'react-router-dom';



function Nav() {
    return (

<div class='background'>
    <nav className='nav-home'>
    
      <div class="logo">
        
         <p><span>a</span> cura</p>
      </div>
      <div class="meenu">
      <ul>
      
       

       
        <li><Link to="/display"><a href="#">Department</a></Link></li>
        


        
        <li><Link to="/hospitalinfo"><a href="#">HospitalInfos</a></Link></li>
        

        
        
        <li><Link to="/appointment"><a href="#">Appointment</a></Link></li>
        
        {/* <a href="#">Booking Info</a>
        <a href="#">New Appointment</a>
        <a href="#">Appointment Status</a> */}
       


        
        <li><Link to="/contact"><a href="#">Contact Us</a></Link></li>
    


      </ul>
      
     
      {/* <div class="search">
        <input class="srch" type="search" name="" placeholder="Search Your doctor/Speciality"/>
        
      </div> */}

<div className='welcome'>
      <p>Welcome User</p>
      </div>


      <div className='logout'>
      <Link to='/logout'><a href="#"><button class="btn">LOGOUT</button></a></Link>
      
      </div>
      
    

      


      </div>
    </nav>
    
</div>

    )
}
export default Nav
