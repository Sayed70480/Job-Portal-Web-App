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

function AppliedJobs() {
  return (
    <div>
      <Table >
        <TableCaption className=" font-semibold text-sm text-[#7444db]  w-fit mx-auto p-2 mb-2 rounded-3xl bg-slate-100">
          A list of your recent Applied Jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Date</TableHead>
            <TableHead className=" text-center">Job Role</TableHead>
            <TableHead className=" text-center">Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4].map((items, index) => (
            <TableRow>
              <TableCell className="font-medium">12/02/2024</TableCell>
              <TableCell className=" text-center font-semibold">FrontEnd Developer</TableCell>
              <TableCell className=" text-center font-semibold">Google</TableCell>
              <TableCell className="text-right"><Badge className="hover:bg-black hover:text-white cursor-pointer border border-black">Accepted</Badge></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </div>
  )
}

export default AppliedJobs;
