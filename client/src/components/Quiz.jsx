import React, { useEffect, useState } from 'react'
import Layout from '../Layout'
import Questions from './Questions'
import { useDispatch, useSelector } from 'react-redux'
import { moveNextQuestion, movePrevQuestion } from '../redux/questionReducer'
import { PushAnswer } from '../hooks/setResult'
import { Navigate } from 'react-router-dom'

const Quiz = () => {
   const {queue, trace} = useSelector(state => state.questions)
   const {results} = useSelector(state => state.answers)
   const dispatch = useDispatch()

   const state = useSelector(state=>state)

   const [check, setCheck] = useState(undefined)

   const next = ()=>{
      console.log("Next Question")
      if (queue.length > trace) {
         dispatch(moveNextQuestion())
         dispatch(PushAnswer(check));
      }
   }

   const prev = ()=>{
      console.log("Prev Question")
      if (trace > 0) {
         dispatch(movePrevQuestion())
      }
   }

   const onChecked = (i)=>{
      setCheck(i)
      // console.log(check)
   }

   if (results.length >= queue.length) {
      // return <Navigate to={"/result"} replace={true} />
      console.log("Finished Quiz")
   }

   useEffect(() => {
      console.log(results.length)
      console.log("=============")
      console.log(queue.length)
   })


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
      <Questions onChecked={onChecked}/>
    
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