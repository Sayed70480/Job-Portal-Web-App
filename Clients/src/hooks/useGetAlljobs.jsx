import { setAlljobs } from "@/redux/jobSlice";
import store from "@/redux/store";
import { JOBS_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

function useGetAlljobs() {
  const dispatch = useDispatch();
 const {searchQuery} = useSelector(store => store.job)
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOBS_API_END_POINT}/get?keyword=${searchQuery}`, {
          withCredentials: true,
        });

        if (res?.data?.success) {
          dispatch(setAlljobs(res.data.jobs));
        } else {
          // Handle case when response is not successful
          toast.error("Failed to fetch jobs.");
        }
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
        
      }
    };

    fetchAllJobs();
  }, []);
}

export default useGetAlljobs;
