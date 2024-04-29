import React, { useEffect, useState } from 'react'
import data from '../database/data'
import { useFetchQuestions } from '../hooks/FetchQuestions';
import { useSelector } from 'react-redux';

export default function Questions() {
   const [selected, setSelected] = useState(false)
   const [{isLoading, apiData, serverError}] = useFetchQuestions();


   const questions = useSelector (state => state.questions.queue)
   const trace = useSelector (state => state.questions.trace)

   let question = questions[trace];
   
   const onSelect = ()=>{
      setSelected(prev=> !prev)
   }

   if (isLoading) {
      return (
         <h1>Loading...</h1>
      )
   }

   if (serverError) {
      return (
         <h1>{serverError || "Unknown Error"}.</h1>
      )
   }

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{question?.question}</h2>
      <ol className='list-decimal ml-8 flex flex-col gap-4 mb-4' key={question?.id}>
         {question?.options.map((q,i)=>(
            <li className='flex gap-4 text-lg items-center' key={i}>
               <div className={`w-6 h-6 border-[5px] border-gray-500 rounded-full bg-rose-500 ${selected ? 'bg-rose-500' : 'bg-transparent'}`}></div>
               <input type="radio" value={true} onChange={onSelect} name='options' id={`q-${i}option`} className='hidden' />
               <label htmlFor={`q-${i}option`}>{q}</label>
            </li>
         ))}
         
         
      </ol>
    </div>
  )
}
