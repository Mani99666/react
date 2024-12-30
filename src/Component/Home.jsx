import React from 'react'
import '../App.css'
import { Link,Outlet } from 'react-router-dom'
import Paragraph from './Paragraph'
const Home = () => {
    const arr=[
        {
            id:1,
            title:"about",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
            btntext:'Lern more'
        },
        {
            id:2,
            title:"about uss",
            para:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
            btntext:'Lern more'
        },
        
    ]
  return (
    <section className='homepage'>
      {
        arr.map((item)=><Paragraph title={item.title} para={item.para} btntext={item.btntext}/>)
      }
      <Link to="/user">User page</Link>
      <Outlet/>
    </section>
  )
}

export default Home
