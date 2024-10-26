import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { useSelector } from 'react-redux'
import store from '@/redux/store'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import axios from 'axios'
import { APPLICATION_API_END_POINT } from '@/utils/constants'

const shortListingStatus = ["Accepted", "Rejected"]

function ApplicantsTable() {
    const { alljobs } = useSelector(store => store.job);
    const { allApplicants } = useSelector(store => store.application);
    const statusHandler = async(status,id) =>{
try {
    const res = await axios.post(`${APPLICATION_API_END_POINT}//status/${id}/update`,{status},{withCredentials:true})
    if(res?.data?.success){
        toast.success(res?.data?.message)
    }
} catch (error) {
    toast.error(error?.response?.data?.message)
}
    }
    return (

        <Table className="my-4 border">
            <TableCaption>
                A list of your recent applied user
            </TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="text-center border">Name</TableHead>
                    <TableHead className="text-center border" >Email</TableHead>
                    <TableHead className="text-center border" >Contact</TableHead>
                    <TableHead className="text-center border" >Resume</TableHead>
                    <TableHead className="text-center border" >Date</TableHead>
                    <TableHead className="text-center border" >Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody >
                {
                    allApplicants && allApplicants?.applications?.map((applicants) => (

                        <TableRow key={applicants?._id}>
                            <TableCell className="text-center border">{applicants?.applicant?.fullname}</TableCell>
                            <TableCell className="text-center border">{applicants?.applicant?.email}</TableCell>
                            <TableCell className="text-center border"> {applicants?.applicant?.phoneNumber}</TableCell>
                            <TableCell className="text-center border "> 
                                {
                                    applicants?.applicant?.profile?.resume ? 
                                    <a className='text-blue-400' href={applicants?.applicant?.profile?.resume} target='_blank'>{applicants?.applicant?.profile?.resumeOriginalName}</a>:
                                    <span>NA</span>
                                }
                                </TableCell>
                            <TableCell className="text-center border "> {applicants?.applicant?.createdAt.split("T")[0]} </TableCell>

                            <TableCell className="text-center border">
                                <Popover className="">
                                    <PopoverTrigger>
                                        <MoreHorizontal />
                                    </PopoverTrigger>
                                    <PopoverContent className="bg-white flex flex-col gap-3 w-38">
                                        {
                                            shortListingStatus.map((status, index) => (
                                                <div onClick={()=>statusHandler(status ,applicants?._id)} className='cursor-pointer '>
                                                    
                                                    <h1 key={index} className={`${status === "Accepted" ? "text-green-300 " : "text-red-300" } `} >{status}</h1>
                                                </div>
                                            ))
                                        }
                                    </PopoverContent>
                                </Popover>
                            </TableCell>
                        </TableRow>

                    ))
                }

            </TableBody>
        </Table>

    )
}

export default ApplicantsTable