import React, { useRef } from 'react'
import Layout from '../Layout'

const Main = () => {
   const inputRef = useRef(null)
  return (
    <Layout>
      <div
      className="card rounded-md bg-white border-2 p-8 w-[50%] border-slate-700"
    >
      <header>
        <h1 className='text-4xl font-bold'> Welcome to Ultra Quiz App</h1>
      </header>
      <main className='flex flex-col gap-4 mt-4'>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat suscipit, non explicabo facilis in perspiciatis, illo, dolor animi error voluptatibus soluta necessitatibus beatae a nam quibusdam vitae eveniet placeat dignissimos?</p>
         <ol className='list-decimal ml-12 flex flex-col gap-2'>
            <li>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, in.
            </li>
            <li>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, in.
            </li>
            <li>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, in.
            </li>
            <li>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, in.
            </li>
            <li>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, in.
            </li>
         </ol>
         <form id="form" className='flex flex-col gap-4 items-center justify-center'>
            <input type="text" ref={inputRef} name="price" id="price" class="block w-[50%] rounded-md border-0 py-2 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Username"/>
            <button className='bg-rose-500 text-white rounded-lg cursor-pointer px-6 py-3'>Start Quiz</button>
         </form>
      </main>
    </div>
    </Layout>
  )
}

export default Main