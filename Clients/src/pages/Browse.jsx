import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import Jobs from "./Jobs";
import JobsList from "@/components/JobsList";
import { useSelector } from "react-redux";
import store from "@/redux/store";

function Browse() {

  const {alljobs} = useSelector(store => store.job) 
  return (
    <div>
      <Navbar />
      <div className="max-w-[85%]   mx-auto">
        <h1 className="flex gap-2 font-bold  text-xl my-8  text-black">
          Serach Results
          <span className="text-[#7444db]">({alljobs.length})</span>
        </h1>
        <div className="grid grid-cols-3 gap-4 mb-10 ">
          {alljobs.map((jobs, index) => {
            return <JobsList jobs={jobs} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
