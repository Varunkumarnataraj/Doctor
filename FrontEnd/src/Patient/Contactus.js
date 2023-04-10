import React from 'react'
import "./Contactus.css"

function Contactus() {
  return (
      <div className='contact-container'>
        <div className='contact-header'>
           <h1> Contact us</h1>
           <p>Any Queries?Contact Now to clear it,We are here to help you out</p>
        </div>
        <div className='sub-container'>
            <div className='content'>
                <h3>Address</h3>
                <address>
                    Echananri<br/>
                    Rathinam park<br/>
                    Coimbatore<br/>

                </address>
                <h3>Email</h3>
                 <h6>anu@gmail.com</h6>
              
                <h3>Phone number</h3>
                <h6>9876543210</h6>
            </div>
           <img className="image" src="https://ww2.eagle.org/content/dam/eagle/Images/new-graphics/1920x1080/contact-1920x1080.jpg"/>
           
        </div>
      </div>
  )
}

export default Contactus
