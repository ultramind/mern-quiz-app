import React, { useEffect, useState } from 'react'
import data from '../database/data'

export default function Questions() {
   const [selected, setSelected] = useState(false)
   const question = data[0];
   const onSelect = ()=>{
      setSelected(prev=> !prev)
   }

   useEffect(() => {
      console.log(data[0])
   }, [])

  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-2xl font-bold'>{question.question}</h2>
      <ol className='list-decimal ml-8 flex flex-col gap-4 mb-4' key={question.id}>
         {question.options.map((q,i)=>(
            <li className='flex gap-4 text-lg items-center'>
               <div className={`w-6 h-6 border-[5px] border-gray-500 rounded-full bg-rose-500 ${selected ? 'bg-rose-500' : 'bg-transparent'}`}></div>
               <input type="radio" value={true} onChange={onSelect} name='options' id={`q-${i}option`} className='hidden' />
               <label htmlFor={`q-${i}option`}>{q}</label>
            </li>
         ))}
         
         
      </ol>
    </div>
  )
}
