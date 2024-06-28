import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
        <div className="bg-gradient-to-r from-[#993af8] to-[#1c0811] w-full py-4 sticky shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          &copy; 2024 <Link to={'https://github.com/Prasugupta21'}>prasugupta</Link> All rights reserved.
        </div>
      
    </div>
  )
}

export default Footer


