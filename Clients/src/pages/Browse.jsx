import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { useEffect } from "react";
import Jobs from "./Jobs";
import JobsList from "@/components/JobsList";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import { setSearchQuery } from "@/redux/jobSlice";
import useGetAlljobs from "@/hooks/useGetAlljobs";

function Browse() {
  useGetAlljobs()
  const {alljobs} = useSelector(store => store.job) 
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(setSearchQuery(""))

  },[])
  return (
    <div>
      <Navbar />
      <div className="max-w-[85%] h-[92vh] overflow-y-auto  mx-auto max-[600px]:max-w-[100%] max-[600px]:px-2">
        <h1 className="flex gap-2 font-bold   text-xl my-8  text-black">
          Serach Results
          <span className="text-[#7444db]">({alljobs.length})</span>
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-10  max-[600px]:grid-cols-none">
          {alljobs.map((jobs, index) => {
            return <JobsList key={index} jobs={jobs} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
