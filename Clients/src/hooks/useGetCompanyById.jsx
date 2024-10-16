import { setSingleCompany } from '@/redux/companySlice';
import { COMPANY_API_END_POINT } from '@/utils/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

function useGetCompanyById(companyId) {
    const dispatch = useDispatch();
 
    useEffect(() => {
      const fetchAllCompany = async () => {
        try {
          const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, {
            withCredentials: true,
          });
  
          if (res?.data?.success) {
            dispatch( setSingleCompany(res?.data?.company));
          } else {
            // Handle case when response is not successful
            toast.error("Failed to fetch jobs.");
          }
        } catch (error) {
          console.error("Error fetching jobs:", error.message);
          toast.error("Error fetching jobs. Please try again later.");
        }
      };
  
      fetchAllCompany();
    }, [companyId, dispatch]);
}

export default useGetCompanyById