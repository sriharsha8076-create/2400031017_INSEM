import React from 'react'
import Home from './Home'
import Courses from './Courses'
import Contact from './Contact'
import { BrowserRouter } from 'react-router-dom'
import { Link, Route, Router, Routes } from 'react-router-dom'


const Master = () => {
  return (
     <div>
      <Link to="/Home">Home:</Link><br />
      <Link to="/Contact">Contact:</Link><br />
      <Link to="/Courses">Courses:</Link><br />
      
      <Routes>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/courses' element={<Courses></Courses>}></Route>
      </Routes>
      
    </div>
  )
}

export default Master
