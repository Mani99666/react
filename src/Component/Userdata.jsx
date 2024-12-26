import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Userdata = () => {
    //const[tableval,settableval]=useState([])
    const[post,setpost]=useState([])
    const[url,seturl]=useState('users')
    useEffect(
        ()=>{
            const gettabledata=async()=>{
              const res=await axios.get(`https://jsonplaceholder.typicode.com/${url}`)
              setpost(res.data)
            }
            gettabledata()
        },[url]
    )
    const deletedata=(id)=>{
     const deletedata=post.filter((item,i)=>item.id!==id)
     setpost(deletedata)
    }
  return (
    <>
    <button onClick={()=>seturl('posts')} style={{margin:'10px'}}>Add post data</button>
<h1>
    {url}
</h1>

{
    url==="users"? <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {
    post.map((item,i)=>(
        <tr key={i}>
        
      <th scope="col">{item.id}</th>
      <th scope="col">{item.name}</th>
      <th scope="col">{item.email}</th>
      <th scope="col">{item.website}</th>
      <th scope="col" ><button onClick={()=>deletedata(item.id)}>Delete</button></th>
    </tr>
    ))
  }
 
  </tbody>
</table>:<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col" >Delete</th>
    </tr>
  </thead>
  <tbody>
  {
    post.map((item,i)=>(
        <tr key={i}>
        
      <th scope="col">{item.id}</th>
      <th scope="col">{item.title}</th>
      <th scope="col">{item.body}</th>
      <th scope="col" ><button onClick={()=>deletedata(item.id)}>Delete</button></th>
    </tr>
    ))
  }
 
  </tbody>
</table>
}
        
            
          


    </>
  )
}

export default Userdata
