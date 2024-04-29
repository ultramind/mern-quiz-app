import React, { useEffect } from 'react'
import Layout from '../Layout'
import Questions from './Questions'
import { useDispatch, useSelector } from 'react-redux'
import { moveNextQuestion, movePrevQuestion } from '../redux/questionReducer'

const Quiz = () => {
   const {queue, trace} = useSelector(state => state.questions)
   const dispatch = useDispatch()
   // next
   const next = ()=>{
      console.log("Next Question")
      if (queue.length > trace) {
         dispatch(moveNextQuestion())
      }
   }

   const prev = ()=>{
      console.log("Prev Question")
      if (trace > 0) {
         dispatch(movePrevQuestion())
      }
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