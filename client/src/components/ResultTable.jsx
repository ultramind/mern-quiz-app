import React from 'react'

function ResultTable() {
  return (
    <div className='mt-4 '>
      <table className='w-full'>
         <thead>
            <tr className='bg-gray-300'>
               <th>Name</th>
               <th>Attempts</th>
               <th>Earn Points</th>
               <th>Results</th>
            </tr>
         </thead>
         <tbody>
            <tr className='text-center '>
               <td>Akachukwu</td>
               <td>50</td>
               <td>100</td>
               <td>Passed</td>
            </tr>
         </tbody>
      </table>

    </div>
  )
}

export default ResultTable