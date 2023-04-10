import React,{useState,useEffect} from 'react';
import '../Doctor/Patientview.css';



function Patientview() {

const [data, setData] = useState([]);
useEffect(()=>{
fetchData();
},[])

const fetchData = async() => {
const getData = await fetch("http://localhost:4000/getpatientdetails")
const data = await getData.json();
console.log(data.getData);
setData(data.data);
}

return (
    <div>
        

<div className='cus_table'>
<table>
<thead>
<tr>
 <th style={{width:'240px'}}>username</th>
 <th style={{width:'350px'}}>email</th>
 <th style={{width:'240px'}}>mobileNumber</th>
 <th style={{width:'350px'}}>age</th>
 <th style={{width:'240px'}}>gender</th>
 <th style={{width:'235px'}}>address</th>
 </tr></thead>

{data.map(i =>{
return(
<tr>
 <td>{i.username}</td>
 <td>{i.email}</td>
 <td>{i.mobileNumber}</td>
 <td>{i.age}</td>
 <td>{i.gender}</td>
 <td>{i.address}</td>
</tr>
)

})}
</table>

</div>
</div>
)
}
export default Patientview