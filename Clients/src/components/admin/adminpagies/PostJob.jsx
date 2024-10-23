import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import store from "@/redux/store";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { JOBS_API_END_POINT } from "@/utils/constants";
import { useNavigate } from "react-router-dom";

function PostJob() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    salary: 0,
    requirements: "",
    location: "",
    jobType: "",
    position: 0,
    experience: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
const navigate = useNavigate()
  const { allCompanies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => [
    setInput({ ...input, [e.target.name]: e.target.value }),
  ];

  const changeCompanyEvent = (value) => {
    const selectCompany = allCompanies.find(
      (company) => company.name === value
    );
    setInput({ ...input, companyId: selectCompany._id });
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      setLoading(true);
      const res = await axios.post(`${JOBS_API_END_POINT}/post`, input, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });
      if (res?.data?.success) {
        toast.success(res?.data?.message);
        navigate("/admin/jobs")
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div>
      <Navbar />
      <div className=" flex flex-col items-center justify-center w-screen  my-10 ">
        <h1 className="my-2 font-bold text-xl text-[#7444db]">
          New Job Detail
        </h1>
        <form
          className="shadow-lg border rounded-xl p-4 w-[40%]"
          onSubmit={sumbitHandler}
        >
          <div className="grid grid-cols-2 gap-2 ">
            <div className="text-center">
              <Label className=" font-bold">Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 text-center rounded-xl text-md font-semibold border-2 border-[#7444db]"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1 text-center rounded-xl  text-md font-semibold border-2 border-[#7444db]"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Salary</Label>
              <Input
                type="number"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 text-center rounded-xl border-2  text-md font-semibold border-[#7444db] my-1"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Requirement</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 text-center rounded-xl border-2  text-md font-semibold border-[#7444db] my-1"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 text-center rounded-xl border-2  text-md font-semibold border-[#7444db] my-1"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 text-center  rounded-xl border-2  text-md font-semibold border-[#7444db]   my-1"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 text-center  rounded-xl  text-md font-semibold border-2 border-[#7444db]  my-1"
              />
            </div>
            <div className="text-center">
              <Label className=" font-bold">Experience</Label>
              <Input
                type="number"
                name="experience"
                value={input.experiencelevel}
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 text-center rounded-xl  text-md font-semibold border-2 border-[#7444db]  my-1"
              />
            </div>
          </div>
          {allCompanies.length > 0 && (
            <div className="mt-4">
              <Select onValueChange={changeCompanyEvent}>
                <SelectTrigger className="w-full rounded-xl text-md font-semibold  border-2 border-[#7444db] ">
                  <SelectValue placeholder="Select Company" className="" />
                </SelectTrigger>
                <SelectContent className="bg-white h-60">
                  {allCompanies.map((companies) => (
                    <SelectItem
                      key={companies._id}
                      value={companies?.name}
                      className="text-md font-semibold "
                    >
                      {companies.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          {loading ? (
            <a className="w-full flex items-center justify-center mt-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin " /> Please wait...
            </a>
          ) : (
            <Button
              type="submit"
              className="bg-[#7444db] rounded-[4px] hover:bg-[#5d4199] text-white w-full my-4  "
            >
              Post New Job
            </Button>
          )}
          {allCompanies.length === 0 && (
            <p className="text-center mt-2 text-md text-red-400">
              Please register a company first, before posting a jobs
            </p>
          )}
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default PostJob;
