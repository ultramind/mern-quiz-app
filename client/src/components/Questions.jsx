import React, { useEffect, useState } from 'react'
import data from '../database/data'
import { useFetchQuestions } from '../hooks/FetchQuestions';
import { useDispatch, useSelector } from 'react-redux';
import { PushAnswer } from '../hooks/setResult';

export default function Questions({onChecked}) {
   const [selected, setSelected] = useState(false)
   const [{isLoading, apiData, serverError}] = useFetchQuestions();
   const dispatch = useDispatch();


   const questions = useSelector (state => state.questions.queue)
   const trace = useSelector (state => state.questions.trace)

   let question = questions[trace];
   
   const onSelect = (i)=>{
      onChecked(i)
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
               <input type="radio" value={false} onChange={()=>onSelect(i)} name='options' id={`q${i}-option`} className='h-[1.5rem] w-[1.5rem] accent-rose-500' />
               <label htmlFor={`q${i}-option`}>{q}</label>
            </li>
         ))}
         
         
      </ol>
    </div>
  )
}
