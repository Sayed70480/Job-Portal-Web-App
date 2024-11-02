import FilterCard from "@/components/FilterCard";
import JobsList from "@/components/JobsList";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";



function Jobs() {
  const { alljobs, searchQuery } = useSelector(store => store.job)
  const [filterJobs, SetFilterJobs] = useState(alljobs);
  console.log(alljobs, searchQuery);

  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = alljobs.filter((jobs) => {
        const query = typeof searchQuery === 'string' ? searchQuery.toLowerCase() : '';
        return jobs.title.toLowerCase().includes(query) ||
          jobs.description.toLowerCase().includes(query) ||
          jobs.location.toLowerCase().includes(query) ||
          String(jobs.salary).toLowerCase().includes(query);
      });

      SetFilterJobs(filteredJobs)
    } else {
      SetFilterJobs(alljobs)
    }
  }, [alljobs, searchQuery])
  return (
    <div>
      <Navbar />
      <div className="max-w-[85%] mx-auto my-10  max-[600px]:max-w-[100%] max-[600px]:px-2">
        <div className="flex gap-5  max-[600px]:flex-col">
          <div className="w-[20%] max-[600px]:w-[100%] ">
            <FilterCard />
          </div>

          {filterJobs.length > 0 ? (
            <div className="flex-1 h-[92vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-2 gap-4  px-4 max-[600px]:grid-cols-none  max-[600px]:px-0">
                {filterJobs.map((jobs, index) => (
                  <motion.div key={jobs._id}
                  initial={{opacity:0,x:100}}
                  animate={{opacity:1 ,x:0}}
                  exit={{opacity:0,x:-100}}
                  transition={{duration :0.3}}
                  >
                    <JobsList jobs={jobs} />
                  </motion.div>

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
      <Footer />
    </div>
  );
}

export default Jobs;
