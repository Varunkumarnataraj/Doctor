import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Registration from "./boot/Regis";
import Signup from "./boot/Sign";
import Nav from "./boot/Patient";
import Admin from "./boot/Admin";
import Doctor from "./boot/Doctor";

import Displaydept from "./Patient/Displaydept";
import Contactus from "./Patient/Contactus";
import CopyView from "./Patient/CopyView";
import DoctDetails from "./Doctor/DoctDetails";

import HospitalInfo from "./Doctor/HospitalInfo";
import Appointment from "./Doctor/Appointment";

import Patientview from "./Doctor/Patientview";

// import View from './Patient/view';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/regis" element={<Registration />} />
          <Route path="/home" element={<Nav />} />
          <Route path="/logout" element={<Signup />} />
          <Route path="/login" element={<Nav />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/display" element={<Displaydept />} />
          <Route path="/doctdetails" element={<DoctDetails />} />
          
          <Route path="/hospitalInfo" element={<HospitalInfo/>} />
          <Route path="/patientview" element={<Patientview/>}/>
          <Route path="/contact" element={<Contactus />} />
          {/* <Route path="/view" element={<View/>}/> */}

          <Route path="/view/:deptid" element={<CopyView />} />
          <Route path="/appointment" element={<Appointment/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
