import React, { useState } from 'react'
import './Todo.css'

const Todotask = () => {
    const[input,setInput]=useState();
    const[task,settask]=useState([]);
    const handlechange=(e)=>{
        setInput(e.target.value)
    }
    const submittask=()=>{
        setInput(input)
        const taskdata={
            id:Date.now(),
            taskval:input
        }
        
        if(input.trim()){
            settask([...task,taskdata])
            console.log(task)
        }
        setInput('')
    }
    const deletedata=(id)=>{
        const delteval=task.filter((item,index)=>item.id!==id)
        settask(delteval)
    }
  return (
    <div className='container'>
    <div className='box'>
    <input type="text" value={input} placeholder="Add Task" onChange={handlechange}/>
    <button onClick={submittask}>Add NewTask</button>
    </div>
    <div>
        <ul>
             {
                task.map((item,index)=>{
                    return <li key={index}>{item.taskval} <button onClick={()=>deletedata(item.id)}>delete</button></li>
                })
            } 
        </ul>
    </div>
      
    </div>
  )
}

export default Todotask
