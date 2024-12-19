import React, { useState } from 'react'

const Formwithhook = () => {
    const[inputval,setinputval]=useState();
    const[show,setshow]=useState()
    const handlechange=(e)=>{
        setinputval(e.target.value);
    }
const showfun=(e)=>{
    e.preventDefault()
    setshow(inputval);
}
  return (
    <div className='mg-left'>
    <input type="text" value={inputval} onChange={handlechange}/>
    <button type="submit" onClick={showfun}>Show me</button>
    <h1>{show}</h1>
    </div>
  )
}

export default Formwithhook
