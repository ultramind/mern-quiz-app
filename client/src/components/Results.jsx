import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Layout'

function Results() {
  return (
   <Layout>
      <div
         className="card rounded-md bg-white border-2 p-8 w-[50%] border-slate-700"
      >
         <header>
         <h1 className='text-4xl font-bold'> Result Summary</h1>
         </header>
         <main className='flex flex-col gap-4 mt-4'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit, non explicabo facilis in perspiciatis, illo, dolor animi error voluptatibus soluta necessitatibus beatae a nam quibusdam vitae eveniet placeat dignissimos?</p>
            <div className='list-decimal ml-12 flex flex-col gap-2 w-[60%] m-auto'>
               <div className="flex justify-between items-center">
                  <p className='font-bold'>Username: </p>
                  <p>Akachukwu</p>
               </div>
               <div className="flex justify-between items-center">
                  <p className='font-bold'>Total Question</p>
                  <p>200</p>
               </div>
               <div className="flex justify-between items-center">
                  <p className='font-bold'>Total Attempts</p>
                  <p>50</p>
               </div>
               <div className="flex justify-between items-center">
                  <p className='font-bold'>Total Earn Point</p>
                  <p>150</p>
               </div>
               <div className="flex justify-between items-center">
                  <p className='font-bold'>Quiz Result</p>
                  <p>1000</p>
               </div>
            </div>
            <hr />
            <div id="form" className='flex flex-col gap-4 items-center justify-center'>
               <Link to="/" className='bg-rose-500 text-white rounded-lg cursor-pointer px-6 py-3'>Reset</Link>
            </div>
         </main>
      </div>
   </Layout>
  )
}

export default Results