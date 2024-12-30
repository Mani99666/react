import React from 'react'
import { useParams } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
const User = () => {
    const idval=useParams()
    const navigate=useNavigate()
  return (
    <div>
      user {idval.id}
      <button onClick={()=>navigate('/')}>Go to home page</button>
    </div>
  )
}

export default User
