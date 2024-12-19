import React,{useState} from 'react'

const Praticehook = () => {
const[stateval,setstateval]=useState(1)
    const increment=()=>{
        setstateval(stateval+1)
    }
    const decrement=()=>{
        setstateval(stateval-1)
    }
  return (
    <div className='mg-left'>
      <h1>{stateval}</h1>
      <button onClick={increment}>Click me</button>
      <button onClick={decrement}>Click me</button>
    </div>
  )
}

export default Praticehook
