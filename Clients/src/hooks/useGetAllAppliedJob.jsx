import { APPLICATION_API_END_POINT } from '@/utils/constants'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function useGetAllAppliedJob() {
 const dispatch = useDispatch()
 useEffect(()=>{
const fetchAppliedJobs = async() =>{
    try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/get `)
        
    } catch (error) {
        console.log(error.message);
    
        
    }
}


 },[])
}

export default useGetAllAppliedJob