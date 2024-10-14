import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { setSingleJob } from "@/redux/jobSlice";
import store from "@/redux/store";
import {
  APPLICATION_API_END_POINT,
  JOBS_API_END_POINT,
} from "@/utils/constants";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function JobDescription() {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const params = useParams();
  const singileJobId = params.id;

  const isInitialApplied =
    singleJob?.applications.some(
      (application) => application?.applicant == user?._id
    ) || false;
    const [isApplied, setIsApplied]= useState(isInitialApplied)
  const dispatch = useDispatch();
  
  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${singileJobId}`,
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        setIsApplied(true)
        const updateSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}] }
        dispatch(setSingleJob(updateSingleJob))
        toast.success(res?.data?.message)
       
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `${JOBS_API_END_POINT}//get/${singileJobId}`,
          {
            withCredentials: true,
          }
        );

        if (res?.data?.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)  )
        }
      } catch (error) {
        console.error("Error fetching jobs:", error.message);
        toast.error("Error fetching jobs. Please try again later.");
      }
    };

    fetchSingleJob();
  }, [singileJobId, dispatch,user?.id]);

  return (
    <div>
      <Navbar />
      <div className="  max-w-[85%] mx-auto  my-8">
        <div className="flex justify-between">
          <div>
            <h1 className="font-bold text-xl text-[#7444db]">
              {singleJob?.title}
            </h1>
            <div className="flex gap-4 mt-4">
              <Badge
                variant="ghost"
                className="text-blue-500 border border-blue-500 font-bold"
              >
                {singleJob?.position} Position
              </Badge>
              <Badge
                variant="ghost"
                className="text-red-400 font-bold border border-red-400"
              >
                {singleJob?.jobType}
              </Badge>
              <Badge
                variant="ghost"
                className="text-[#6A38C2] border border-[#6A38C2] font-bold"
              >
                {singleJob?.salary} LPA
              </Badge>
            </div>
          </div>
          {/* appllied Button */}
          <Button
            disabled={isInitialApplied}
            onClick={applyJobHandler}
            className={` rounded-3xl text-white  ${
              isInitialApplied
                ? "bg-gray-300 text-black cursor-not-allowed  hover:bg-gray-300"
                : " bg-[#7444db] hover:bg-[#5d3da2]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>

        <div className="mt-2 ">
          <h1 className="mt-4 text-xl font-bold text-[#7444db]">
            Job Description
          </h1>
          <p className="text-justify font-semibold text-sm  h-44 overflow-auto">
            {singleJob?.description}
          </p>
        </div>
        <div className="my-4  flex gap-6 flex-wrap">
          <Badge
            variant="ghost"
            className="text-[#6A38C2] border border-[#6A38C2] font-bold flex gap-2 text-sm"
          >
            <h1 className="">Role</h1> <span>:</span>
            <span> {singleJob?.title} </span>
          </Badge>
          <Badge
            variant="ghost"
            className="text-[#6A38C2] border border-[#6A38C2] font-bold flex gap-2 text-sm"
          >
            <h1 className="">Location</h1> <span>:</span>
            <span> {singleJob?.location} </span>
          </Badge>
          <Badge
            variant="ghost"
            className="text-[#6A38C2] border border-[#6A38C2] font-bold flex gap-2 text-sm"
          >
            <h1 className="">Experence</h1> <span>:</span>
            <span> {singleJob?.experiencelevel} Years</span>
          </Badge>
          <Badge
            variant="ghost"
            className="text-[#6A38C2] border border-[#6A38C2] font-bold flex gap-2 text-sm"
          >
            <h1 className="">Salary</h1> <span>:</span>
            <span> {singleJob?.salary} $</span>
          </Badge>
          <Badge
            variant="ghost"
            className="text-[#6A38C2] border border-[#6A38C2] font-bold flex gap-2 text-sm"
          >
            <h1 className="">Total Applications</h1> <span>:</span>
            <span> {singleJob?.applications.length}</span>
          </Badge>
          <Badge
            variant="ghost"
            className="text-[#6A38C2] border border-[#6A38C2] font-bold flex gap-2 text-sm"
          >
            <h1 className="">Posted Date</h1> <span>:</span>
            <span> {singleJob?.createdAt.split("T")[0]}</span>
          </Badge>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default JobDescription;
