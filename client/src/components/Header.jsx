import React from 'react'
import { TfiWrite } from "react-icons/tfi";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[70px] z-50 relative px-16 py-2 bg-gray-900 text-gray-300 flex justify-between items-center' >
      <div className='flex gap-2 font-semibold justify-center items-center text-3xl' ><TfiWrite /> UltraQuiz</div>
      <div className='flex gap-8'>
        <Link to="/">Home</Link>
        <Link to="/quiz">Add Quiz</Link>
        <Link to="/result">Akachukwu</Link>
      </div>
    </div>
  )
}

export default Header