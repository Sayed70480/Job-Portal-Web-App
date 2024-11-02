import React from "react";
import LatestJobsCards from "./LatestJobsCards";
import { useSelector } from "react-redux";
import store from "@/redux/store";


function LatestJobs() {
  const {alljobs} = useSelector(store => store.job);

  return (
    <div className=" max-w-[85%] mx-auto my-10 max-[600px]:max-w-[100%] max-[600px]:mx-0  max-[600px]:px-2">
      <h1 className="text-2xl font-bold text-black ">
        <span className="text-[#6A38C2] ">Latest & Top </span>Job Openings
      </h1>
      {/* multy cards */}
      <div className="grid grid-cols-3 gap-4 my-5  max-[600px]:grid-cols-none ">
      {
       alljobs?.length <= 0 ? <span>Jobs Not Found</span> : alljobs?.slice(0,6).map((jobs , index) =>(
        <LatestJobsCards  key={jobs._id} jobs={jobs} />
      ))
      }
    </div>
    </div>
  );
}

export default LatestJobs;
