import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";
import store from "@/redux/store";

function AppliedJobsTable() {

  const { allAppliedJobs } = useSelector(store => store.job)
  console.log(allAppliedJobs);

  return (
    <div>
      <Table >
        <TableCaption className=" font-semibold text-sm text-[#7444db]  w-fit mx-auto p-2 mb-2 rounded-3xl bg-slate-100">
          A list of your recent Applied Jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">Date</TableHead>
            <TableHead className=" text-center">Job Role</TableHead>
            <TableHead className=" text-center">Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs.length <= 0 ? <p className=" w-52 text-md text-red-400 animate-pulse font-bold" >You haven't applied any job yet</p> : allAppliedJobs.map((items, index) => (
            <TableRow key={items._id} >
              <TableCell className="font-medium  text-center">{items?.createdAt?.split("T")[0]}</TableCell>
              <TableCell className=" text-center font-semibold">{items?.job?.title}</TableCell>
              <TableCell className=" text-center font-semibold">{items?.job?.company?.name}</TableCell>
              <TableCell className="text-right"><Badge className={`${items.status === "pending" && "bg-yellow-400"} ${items.status === "accepted" && "bg-green-500"} ${items.status === "rejected" && "bg-red-500"}  border border-[#7444db] text-white hover:bg-hidde  hover:text-black cursor-pointer  `} >{items?.status.toUpperCase()}</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </div>
  )
}

export default AppliedJobsTable;
