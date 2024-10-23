import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";
import { Link, useNavigate } from "react-router-dom";

function JobsList({ jobs }) {

  const daysAgoFunction = (mongoDBtime) =>{
    const  mongoCreatedtime = new Date(mongoDBtime);
    const currenttime = new Date;
    const timeDifference =   currenttime - mongoCreatedtime;
    return Math.floor(timeDifference/(1000*24*60*60))
  }

  const navigate = useNavigate();
  return (
    <div className="shadow-xl p-4 bg-white border border-gray-100 rounded-[15px] h-fit">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-gray-400">{daysAgoFunction(jobs.createdAt) == 0 ? "Today" : `${daysAgoFunction(jobs.createdAt)} Day's Ago` } </p>
        <Button
          variant="outline"
          className="rounded-full border-[#6A38C2]"
          size="icon"
        >
          <Bookmark className="text-[#6A38C2]" />
        </Button>
      </div>
      <div className="flex items-center gap-3 my-2">
        <Button className="p-[0px] border-2  rounded-full">
          <Avatar>
            <AvatarImage src={jobs?.company?.logo} />
          </Avatar>
        </Button>
        <div className="">
          <h1 className="font-bold text-[#6A38C2] tracking-wider">
            Company Name
          </h1>
          <p className="font-semibold tracking-wider text-gray-400">{jobs?.company?.name}</p>
        </div>
      </div>
      <div className="mt-4">
        <h1 className="text-[#6A38C2] font-bold tracking-wider">
          {jobs?.title}
        </h1>
        <p className="font-semibold text-justify tracking-wider">
          {jobs?.description.slice(0,110)}..........
        </p>
      </div>

      <div className="flex gap-3 mt-4">
        <Badge
          variant="ghost"
          className="text-blue-500 border border-blue-500 font-bold"
        >
    
          {jobs?.position} Position
        </Badge>
        <Badge
          variant="ghost"
          className="text-red-400 font-bold border border-red-400"
        >
      
          {jobs?.jobType}
        </Badge>
        <Badge
          variant="ghost"
          className="text-[#6A38C2] border border-[#6A38C2] font-bold"
        >
          
          {jobs?.salary} LPA
        </Badge>
      </div>

      <div className="mt-4 flex gap-2">
        <Button
          variant="outline"
          onClick={() => navigate(`/job/description/${jobs._id}`)}
          className="bg-white border border-[#6A38C2] hover:shadow-xl hover:bg-[#6A38C2] hover:text-white text-[#6A38C2]  rounded-[20px] "
        >
          Details
        </Button>
        <Button
          variant="outline"
          className="bg-white border border-[#6A38C2] hover:shadow-xl hover:bg-[#6A38C2] hover:text-white text-[#6A38C2]  rounded-[20px]"
        >
          Save for later
        </Button>
      </div>
    </div>
  );
}

export default JobsList;
