import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOBS_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

function UseGetAllAdminJobs() {
    const dispatch = useDispatch();
 
    useEffect(() => {
      const fetchAlladminJobs = async () => {
        try {
          const res = await axios.get(`${JOBS_API_END_POINT}/getadminjobs`, {
            withCredentials: true,
          });
  
          if (res?.data?.success) {
            dispatch( setAllAdminJobs(res.data.adminjobs));
          } else {
            // Handle case when response is not successful
            toast.error("Failed to fetch Admin jobs.");
          }
        } catch (error) {
          console.error("Error fetching Admin jobs:", error.message);
          toast.error("Error fetching Admin jobs. Please try again later.");
        }
      };
  
      fetchAlladminJobs();
    }, []);
}

export default UseGetAllAdminJobs