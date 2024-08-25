import React from 'react'
import { Badge } from "@/components/ui/badge"

function LatestJobsCards() {
  return (
    <div className=' shadow-xl p-5 rounded-[2%] bg-white border border-[#6A38C2] cursor-pointer'>
      <div>
        <h1 className='font-medium text-lg text-[#6A38C2] '>Company Name</h1>
        <p className='text-sm text-gray-500'>Pakistan</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident optio ratione inventore!
        </p>
      </div>
      <div className='flex justify-between mt-4'>
        <Badge variant="ghost" className="text-blue-500 border border-blue-500 font-bold"> 12 Position</Badge>
        <Badge variant="ghost" className="text-red-400 font-bold border border-red-400"> Part Time</Badge>
        <Badge variant="ghost" className="text-[#6A38C2] border border-[#6A38C2] font-bold"> 12 LPA</Badge>
        
      </div>
    </div>
  )
}

export default LatestJobsCards