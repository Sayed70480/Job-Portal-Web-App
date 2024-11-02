import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import store from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobsTable from "../JobsTable";
import UseGetAllAdminJobs from "@/hooks/UseGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";

function AdminJobs() {
  UseGetAllAdminJobs()
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch( setSearchJobByText(input));
  }, [input]);


// admin jobs



  return (
    <div>
      <Navbar />
      <div className=" max-w-[85%] m-auto my-10    max-[600px]:max-w-[100%] max-[600px]:px-2  h-[550px] ">
        <div className="flex gap-4">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-xl text-md font-semibold"
            placeholder="Filter by Name amd role"
          />
          <Button
            className="bg-[#7444db] text-white rounded-xl hover:bg-[#543a8b]"
            onClick={() => navigate("/admin/job/create")}
          >
            New Jobs
          </Button>
        </div>
        <JobsTable/>
      </div>
      <Footer />
    </div>
  );
}

export default AdminJobs;
