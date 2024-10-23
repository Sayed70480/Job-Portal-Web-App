import FilterCard from "@/components/FilterCard";
import JobsList from "@/components/JobsList";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import store from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";



function Jobs() {
const {alljobs} = useSelector(store => store.job)

  return (
    <div>
      <Navbar />
      <div className="max-w-[85%] mx-auto my-10  ">
        <div className="flex gap-5">
          <div className="w-[20%] ">
            <FilterCard />
          </div>

          {alljobs.length > 0 ? (
            <div className="flex-1 h-[92vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-2 gap-4  px-4">
              {alljobs.map((jobs, index) => (
                <JobsList key={jobs._id} jobs={jobs}  />
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
