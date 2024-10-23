
import { setAllCompanies } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

function UseGetAllCompanies() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    const fetchAllCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });

        if (res?.data?.success) {
          dispatch(setAllCompanies(res.data.companies));
        } else {
          // Handle case when response is not successful
          toast.error("Failed to fetch Companies.");
        }
      } catch (error) {
        console.error("Error fetching Companies:", error.message);
        toast.error("Error fetching Companies. Please try again later.");
      }
    };

    fetchAllCompanies();
  }, [dispatch]);
}

export default UseGetAllCompanies;
