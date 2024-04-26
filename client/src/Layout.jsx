import React from 'react'
import Header from './components/Header'

const Layout = ({children}) => {
  return (
   <div className='bg-gray-100'>
      <Header/>
      <div className="flex justify-center items-center w-full h-[80vh]">
         {children}
      </div>
      
    </div>
  )
}

export default Layout