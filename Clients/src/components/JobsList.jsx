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
    <div className="shadow-xl p-4 bg-white border border-gray-100 rounded-[15px] ">
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
            <AvatarImage src="data:image/jpeg;base64,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" />
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
          {jobs?.description}
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
