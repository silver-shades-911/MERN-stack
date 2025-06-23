import React from 'react'
import Navbar from './Navbar'
import {Routes, Route } from "react-router-dom";
import Home from "./Home";
import CheckOutPage from './CheckOutPage';

const ShoppingApp = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<CheckOutPage/>} />
        </Routes>

      </div>

    </div>
  )
}

export default ShoppingApp
