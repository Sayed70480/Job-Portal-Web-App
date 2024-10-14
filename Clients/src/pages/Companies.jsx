import CompaniesTable from "@/components/CompaniesTable";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import React from "react";

function Companies() {
  return (
    <div>
      <Navbar />
      <div className=" max-w-[85%] m-auto my-10 ">
        <div className="flex gap-4">
          <Input
            type="text"
            className="rounded-xl text-md font-semibold"
            placeholder="Filter by Name"
          />
          <Button className="bg-[#7444db] text-white rounded-xl hover:bg-[#543a8b]">
            New Company
          </Button>
        </div>
        <CompaniesTable/>
      </div>
      <Footer />
    </div>
  );
}

export default Companies;
