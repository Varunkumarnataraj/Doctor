import React from "react";
import "../Patient/Display.css";
import { Link } from "react-router-dom";
import { useState } from "react";


function Display({ hospital }) {
  const [search, setSearch] = useState("");
  return (
   <div className="display-body">
    <div className="show-head">
      <h2><b>Departments</b></h2>
    </div>
      <div className="bar">
              <input type="search" placeholder="search your speciality" value={search}
              onChange={(e) => setSearch(e.target.value)}></input>
            </div>
{/* 
    <nav className="header-display">
      <div class="logo">
         <p><span>a</span> cura</p>
      </div>
    
      <div class="search">
        <input class="srch" type="search" name="" placeholder="Search Your doctor/Speciality"/>
        
      </div>
      <div className='logout'>
      <Link to='/logout'><a href="#"><button class="btn">LOGOUT</button></a></Link>
      </div>
    
    </nav> */}
    



      <div className="mainpage-display">
      {hospital
      .filter((hospitalone) => {
            return hospitalone.deptname?.toLowerCase().includes(search.toLowerCase());
          })       
        .map((data) => (
          <div className="display-content">
            <div className="imgbox">
              <img
                src={data.img}
                className="imagess"
              />
            </div>
            <div className="display-name">
              <h2>{data.deptname}</h2>
            </div>
            <Link to={"/view/"+data._id}>
            <button className="btndetails">View Details</button>
            </Link>
            
          </div>
        ))}
      </div>
  </div>
  );
}


export default Display;
