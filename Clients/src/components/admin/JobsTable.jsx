import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useNavigate } from "react-router-dom";

function JobsTable() {
  const navigate = useNavigate()
 
  const {  searchJobByText } = useSelector(
    (store) => store.job
  );
  console.log(searchJobByText);
  
  const {allAdminJobs} = useSelector(store => store.job)
  const [filterAdminJobs, setFilterAdminJobs] = useState(allAdminJobs);
console.log(filterAdminJobs);

  useEffect(() => {
    const filterAllAdminJobs =
    allAdminJobs?.length > 0
        ? allAdminJobs.filter((jobs) => {
            if (!searchJobByText) {
              return true;
            }
            return jobs?.title
            ?.toLowerCase()
            .includes(searchJobByText.toLowerCase()) || jobs?.company?.name
            ?.toLowerCase()
            .includes(searchJobByText.toLowerCase());
          })
        : [];

        setFilterAdminJobs(filterAllAdminJobs);
  }, [allAdminJobs, searchJobByText]);

  return (
    <div className="mt-3">
      <Table>
        <TableCaption className="font-semibold text-[#7444db] text-lg">A list of your recent Posted Jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center  ">Company Name</TableHead>
            <TableHead className="text-center  ">Role</TableHead>
            <TableHead className="text-center  ">Date</TableHead>
            <TableHead className="text-center ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(filterAdminJobs) &&
            filterAdminJobs?.map((jobs) => (
              <TableRow className="">
                <TableCell className="text-center font-semibold ">{jobs?.company?.name}</TableCell>
                <TableCell className="text-center font-semibold">{jobs.title}</TableCell>
                <TableCell className="text-center font-semibold">
                  {jobs.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-center ">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="hover:text-[#7444db] size-8 " />
                    </PopoverTrigger>
                    <PopoverContent className="w-32 flex flex-col  gap-4 p-3 bg-white">
                      <div className="flex gap-2 items-center  cursor-pointer" onClick={() => navigate(`/admin/companie/${jobs._id}`)}>
                        <Edit2 className="text-[#7444db] size-5" />
                        <span className="text-[#7444db] text-md font-semibold">
                          Edit
                        </span>
                      </div>
                      <div className="flex gap-2 items-center cursor-pointer  " onClick={()=> navigate(`/admin/jobs/${jobs._id}/applicants`)}>
                        <Eye className="text-[#7444db] size-5" />
                        <span className="text-[#7444db] text-md font-semibold">Applicant</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default JobsTable;
