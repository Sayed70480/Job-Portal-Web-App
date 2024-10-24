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
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useNavigate } from "react-router-dom";

function CompaniesTable() {
  const navigate = useNavigate()
  const { allCompanies, searchCompanybyText } = useSelector(
    (store) => store.company
  );

  const [filterCompany, setFilterCompany] = useState(allCompanies);

  useEffect(() => {
    const filtercompanies =
      allCompanies?.length > 0
        ? allCompanies.filter((company) => {
            if (!searchCompanybyText) {
              return true;
            }
            return company?.name
              ?.toLowerCase()
              .includes(searchCompanybyText.toLowerCase());
          })
        : [];

    setFilterCompany(filtercompanies);
  }, [allCompanies, searchCompanybyText]);

  return (
    <div className="mt-3">
      <Table>
        <TableCaption className="font-semibold text-[#7444db] text-lg">A list of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center  ">Logo</TableHead>
            <TableHead className="text-center  ">Name</TableHead>
            <TableHead className="text-center  ">Date</TableHead>
            <TableHead className="text-center ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.isArray(filterCompany) &&
            filterCompany?.map((companies) => (
              <TableRow className="">
                <TableCell className="flex  justify-center ">
                  <Avatar className="border border-[#7444db] shadow-md">
                    <AvatarImage src={companies.logo} />
                  </Avatar>
                </TableCell>
                <TableCell className="text-center  font-semibold ">{companies.name}</TableCell>
                <TableCell className="text-center  font-semibold ">
                  {companies.createdAt.split("T")[0]}
                </TableCell>
                <TableCell className="text-center ">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal className="hover:text-[#7444db] size-8 " />
                    </PopoverTrigger>
                    <PopoverContent className="w-32 bg-white">
                      <div className="flex justify-between" onClick={() => navigate(`/admin/companie/${companies._id}`)}>
                        <Edit2 className="text-[#7444db] cursor-pointer" />
                        <span className="text-[#7444db] font-semibold">
                          Edit
                        </span>
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

export default CompaniesTable;
