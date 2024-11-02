import Navbar from '@/components/shared/Navbar'
import React, { useEffect } from 'react'
import ApplicantsTable from '../ApplicantsTable'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { APPLICATION_API_END_POINT } from '@/utils/constants'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '@/redux/applicationSlice'
import store from '@/redux/store'
import Footer from '@/components/shared/Footer'

function Applicants() {
    const dispatch = useDispatch()
    const param = useParams()
    const {allApplicants} = useSelector(store => store.application);
    console.log(allApplicants);
    
    useEffect(() => {
        const fetchAllApplicants = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/${param.id}/applicants`, { withCredentials: true })
                console.log(res.data);
                if (res?.data?.success) {
                    dispatch(setAllApplicants(res?.data.job))
                   
                }
            } catch (error) {
                console.log(error.message);
              
            }
        }
        fetchAllApplicants()
    }, [])
    return (
        <div>

            <Navbar />
            <div className='max-w-[85%] m-auto my-10  h-[550px]'>
                <h1 className='text-lg font-semibold '>Applications ({allApplicants?.applications?.length})</h1>
                <ApplicantsTable />
            </div>
            <Footer/>
        </div>
    )
}

export default Applicants