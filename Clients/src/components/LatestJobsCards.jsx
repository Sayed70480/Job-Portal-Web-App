import React from 'react'
import { Badge } from "@/components/ui/badge"

function LatestJobsCards({jobs}) {
  
  return (
    <div className=' shadow-xl p-5 rounded-[2%] h-fit bg-white border border-[#6A38C2] cursor-pointer'>
      <div>
        <h1 className='font-medium text-lg text-[#6A38C2] '>{jobs?.company?.name}</h1>
        <p className='text-sm text-gray-500'>{jobs.location}</p>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>{jobs?.title}</h1>
        <p className='text-sm text-gray-600 font-semibold text-justify'>{jobs?.description.slice(0,120)} .....
        </p>
      </div>
      <div className='flex justify-between mt-4'>
        <Badge variant="ghost" className="text-blue-500 border border-blue-500 font-bold"> {jobs?.position} Position</Badge>
        <Badge variant="ghost" className="text-red-400 font-bold border border-red-400"> {jobs?.jobType}</Badge>
        <Badge variant="ghost" className="text-[#6A38C2] border border-[#6A38C2] font-bold"> {jobs?.salary} LPA</Badge>
        
      </div>
    </div>
  )
}

export default LatestJobsCards