import React from 'react';
import '../Doctor/HospitalInfo.css';

function HospitalInfo() {
  return (
    <div className='hospital-container'>
      
        <div className='hospital-header'>
            <h1><b>Hospital Services</b></h1>
            <hr></hr>
        </div>
        <div className='hospital-whole'>
            <div className='contone'>
                <div className='hospital-left'></div>
                <div className='hospital-content'><b>Hospital Services</b><br></br>Seamless service 24 / 7</div>
            </div>
            <div className='hospital-contwo'>
                <div className='hospital-right'></div>
                <div className='hospital-content'><b>Technology</b><br></br>Cutting Edge Technology to enhance outcomes and improve safety.</div>
            </div>
            <div className='hospital-conthree'>
                <div className='hospital-centre'></div>
                <div className='hospital-content'><b>Emergency</b><br></br>Department of lifesavery</div>
            </div>
        </div>

        <div className='hospital-divtwo'>
            <div className='contfour'>
                <div className='hospital-one'></div>
                <div className='hospital-content'><b>Lab Services</b><br></br>An NABL Accredited LAB !</div>
            </div>
            <div className='contfive'>
                <div className='hospital-two'></div>
                <div className='hospital-content'><b>Pharmacy</b><br></br>Comprehensive Pharmaceutial Service !</div>
            </div>
            <div className='contsix'>
                <div className='hospital-three'></div>
                <div className='hospital-content'><b>Infrastructure</b><br></br>About Our Hospital</div>
            </div>
        </div>

        <div className='hospital-divlast'>
            <div className='contseven'>
                <div className='hospital-four'></div>
                <div className='hospital-content'><b>Blood Bank</b><br></br>Back Bone of our Hospital.</div>
            </div>
            <div className='conteight'>
                <div className='hospital-five'></div>
                <div className='hospital-content'><b>Physiotherapy</b><br></br>Specialised training center</div>
            </div>
            <div className='contnine'>
                <div className='hospital-six'></div>
                <div className='hospital-content'><b>Dietics</b><br></br>We care for your Nutritional needs !</div>
            </div>
        </div>


    </div>
  )
}

export default HospitalInfo
