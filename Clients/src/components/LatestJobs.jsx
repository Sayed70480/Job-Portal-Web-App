import React from "react";
import LatestJobsCards from "./shared/LatestJobsCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

function LatestJobs() {
  return (
    <div className=" max-w-[85%] mx-auto my-20">
      <h1 className="text-2xl font-bold text-black">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      {/* multy cards */}
      <div className="grid grid-cols-3 gap-4 my-5">
      {
        randomJobs.slice(0,6).map((items , index) =>(
          <LatestJobsCards />
        ))
      }
    </div>
    </div>
  );
}

export default LatestJobs;
