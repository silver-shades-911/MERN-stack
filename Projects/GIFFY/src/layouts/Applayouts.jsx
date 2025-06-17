import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Applayouts = () => {
  return (
    <div className='bg-gray-950 min-h-screen text-white'>
     <div className='container mx-auto px-6 py-4'>
      <Navbar/>

      <main>
        <Outlet/>
      </main>
     </div>
    </div>
  )
}

export default Applayouts;


/*

 <Outlet/> this tag is give by React Router Dom


*/