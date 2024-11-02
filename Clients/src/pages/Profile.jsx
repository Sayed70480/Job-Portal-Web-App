import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Contact, LucideLinkedin, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import AppliedJobsTable from "@/components/AppliedJobsTable";
import UpdateProfileDialog from "@/components/UpdateProfileDialog";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import useGetAllAppliedJob from "@/hooks/useGetAllAppliedJob";

function Profile() {

  useGetAllAppliedJob()
  const isResume = true;
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="max-[600px]:px-2"> 
      <Navbar />
      <div className="  max-w-[85%] mx-auto bg-gray-100  rounded-2xl overflow-hidden my-5 p-8   max-[600px]:p-0 max-[600px]:max-w-[100%]">
        <div className="flex justify-between gap-10  max-[600px]:flex-col max-[600px]:items-center max-[600px]:w-full ">
          <Avatar className=" max-[600px]:py-4" >
            <AvatarImage
              className="border border-[#7444db] flex items-center justify-center h-38 w-60 first-line: bg-gray-200 rounded-full  "
              src={user?.profile?. profilePhoto}
            />
            <div className="  flex justify-center">
            <Button
            onClick={() => setOpen(true)}
            className="  p-2 text-[#7444db]   flex gap-5 mt-4 "
          >
            <h2 className="text-xl">Edit Profile</h2>
            <Pen />
          </Button>
            </div>
            
          </Avatar>
          <div className="w-full max-[600px]:px-2  ">
            <h1 className="font-bold text-xl text-[#7444db] mb-2">
              {user?.fullname}
            </h1>
            <p className="text-black font-semibold text-justify">
              {user?.profile?.bio}
            </p>
            <div className="flex gap-4  mt-4  max-[600px]:flex-col  max-[600px]:w-fit">
              <div className="flex border gap-2 items-center p-2 rounded-3xl border-[#7444db] cursor-pointer">
                <Mail className="text-[#7444db]" />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center border gap-2  p-2 rounded-3xl border-[#7444db]  cursor-pointer">
                <Contact className="text-[#7444db]" />
                <span>+{user?.phoneNumber}</span>
              </div>
            </div>
            <div className="mt-4  ">
              <h1 className="text-[#7444db] font-bold text-lg mb-2">Skills</h1>
              <div className="flex gap-4 flex-wrap">
                {user?.profile?.skills.length != 0 ? (
                  user?.profile?.skills.map((items, index) => (
                    <Badge
                    key={index}
                      variant="ghost"
                      className="  border border-[#7444db] text-[#7444db] hover:bg-[#7444db] hover:text-white cursor-pointer text-md font-semibold    "
                    >
                      {items}
                    </Badge>
                  ))
                ) : (
                  <span>Na</span>
                )}
              </div>
            </div>
            <div className="mt-4 flex flex-col ">
              <label className="text-[#7444db] font-bold text-lg">Resume</label>
              <div className="  mt-2   ">
                {isResume ? (
                  <a
                    target="blank"
                    href={user?.profile?.resume}
                    className="font-bold hover:underline  text-blue-400"
                  >
                    {user?.profile?.resumeOriginalName}
                  </a>
                ) : (
                  <span className="font-bold">Na</span>
                )}
              </div>
            </div>
          </div>
        
        </div>
        <div className="mt-6 bg-white rounded-2xl p-2 border border-[#7444db] ">
          <h1 className="text-center mb-4 text-lg font-bold text-[#7444db]">
            Applied Jobs
          </h1>
          <AppliedJobsTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
      <Footer />
    </div>
  );
}

export default Profile;
