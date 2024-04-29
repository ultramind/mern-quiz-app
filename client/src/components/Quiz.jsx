import React, { useEffect } from 'react'
import Layout from '../Layout'
import Questions from './Questions'
import { useSelector } from 'react-redux'

const Quiz = () => {
   const questions = useSelector(state => state)

   useEffect(() => {
      console.log(questions)
   }, [])
  
   // next
   const next = ()=>{
      console.log("Next Question")
   }

   const prev = ()=>{
      console.log("Prev Question")
   }
  return (
   <Layout>
   <div
   className="card rounded-md flex flex-col gap-4 bg-white border-2 p-8 w-[50%] border-slate-700"
 >
   <header>
     <h1 className='text-4xl font-bold'> Ultra Quiz</h1>
   </header>
   <main className='flex flex-col gap-4 mt-4'>

   {/* Display Questions */}
      <Questions/>
    
   </main>
   <hr/>
   <footer id="form" className='flex gap-4 items-center justify-between mt-4'>
      <button onClick={prev} className='bg-rose-500 text-white rounded-lg cursor-pointer px-6 py-3'>{'<< Prev'}</button>
      <button onClick={next} className='bg-green-500 text-white rounded-lg cursor-pointer px-6 py-3'>{'Next >>'}</button>
   </footer>
 </div>
 </Layout>
  )
}

export default Quiz