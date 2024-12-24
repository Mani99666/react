import React, { useEffect, useState } from "react";
import axios from 'axios'
let url="https://jsonplaceholder.typicode.com/users" 
const Taskuseeffect = () => {
    const [items,setitems]=useState([])
  useEffect(() => {
     const getdata=async()=>{
      const dataresurl=await axios.get(`${url}`)
      setitems(dataresurl.data)
     } 
     getdata()
  });
//   const[val,setval]=useState(0)
//   const[val1,setval1]=useState(1)
// useEffect(() => {
// console.log('Manikanta')
// },[val]);
// //   const[val,setval]=useState(0)
// //   useEffect(() => {
// //   document.title=`${val}`
// //   });
  return (
    <div>
    {
        items.map((val,index)=>{
            return ( 
            <div key={index}>
            <h1>{val.name}</h1>
            <p>{`${val.address.street},${val.address.geo.lat},${val.address.city}`}</p>
            </div>
            )
        }
        )
    }
    </div>
  );
};

export default Taskuseeffect;
