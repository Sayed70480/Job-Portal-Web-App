import CompaniesTable from "@/components/admin/CompaniesTable";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UseGetAllCompanies from "@/hooks/UseGetAllCompanies";
import { setSearchCompanybyText } from "@/redux/companySlice";
import store from "@/redux/store";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Companies() {
  UseGetAllCompanies();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { searchCompanybyText } = useSelector((store) => store.company);
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(setSearchCompanybyText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className=" max-w-[85%] m-auto my-10  ">
        <div className="flex gap-4">
          <Input
            type="text"
            name="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded-xl text-md font-semibold"
            placeholder="Filter by Name"
          />
          <Button
            className="bg-[#7444db] text-white rounded-xl hover:bg-[#543a8b]"
            onClick={() => navigate("/admin/companie/create")}
          >
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
      <Footer />
    </div>
  );
}

export default Companies;
