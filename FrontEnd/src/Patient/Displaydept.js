import React, { useState } from 'react'
import { useEffect} from 'react';
import axios from 'axios';
import Display from './Display';


const Displaydept=()=> {

  //initialize variables

    const[hospital,sethospital]=useState([]);
    const[loading,setloading]=useState();
    const[error,seterror]=useState();



useEffect(() => {
  
  

  //get values from db to ui

  axios.get('http://localhost:4000/getdept')
  .then(res => { console.log(res.data.hospital)

  sethospital(res.data.hospital)},  //set all the data

  
  
  
  )
  .catch((err)=>{
    
    seterror(error)

    console.log(err)

    
})
});
return (
<>
<Display hospital={hospital}/>

</>
)


}
export default Displaydept