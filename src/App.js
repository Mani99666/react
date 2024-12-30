import React from 'react'
//import Taskuseeffect from './Component/Taskuseeffect'
//import Todotask from './Component/Todotask'
//import Header from './Component/Header'
import Home from './Component/Home'
//import Praticehook from './Component/Praticehook'
//import Formwithhook from './Component/Formwithhook'
import './App.css'
//import Userdata from './Component/Userdata'
import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import About from './Component/About'
import Contact from './Component/Contact'
import Header from './Component/Header'
import User from './User'
const App = () => {
  return (
    <div className='container' style={{display:'block'}}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
            <Route path="/user" element={<User/>}/>
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<div>Hello this 404 page</div>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
