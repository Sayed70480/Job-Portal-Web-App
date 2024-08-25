import FilterCard from "@/components/FilterCard";
import JobsList from "@/components/JobsList";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const jobsArray = [2, 3, 4, 4,3,3,3,4];

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className="max-w-[85%] mx-auto my-10  ">
        <div className="flex gap-5">
          <div className="w-[20%] ">
            <FilterCard />
          </div>

          {jobsArray.length > 0 ? (
            <div className="flex-1 h-[84vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-2 gap-4  px-4">
              {jobsArray.map((items, index) => (
                <JobsList  />
              ))}
              </div>
             
            </div>
          ) : 
            <div className="text-center w-full  ">
              <span className="animate-pulse font-bold text-red-400 ">
                Jobs Not Found!
              </span>
            </div>
          }
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Jobs;
