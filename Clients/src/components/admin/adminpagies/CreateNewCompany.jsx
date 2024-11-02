import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function CreateNewCompany() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [companyName, setCompanyName] = useState(null);

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      ); 
      if(res?.data?.success){
        dispatch(setSingleCompany(res?.data?.company))
        toast.success( `${res?.data?.company?.name} ${res?.data?.message}`)
        const companyId = res?.data?.company?._id
        navigate(`/admin/companie/${companyId}`)
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[85%] mx-auto my-10  max-[600px]:max-w-[100%] max-[600px]:px-2 h-[550px]">
        <div className=" rounded-xl text-center p-2 bg-gray-100 max-[600px]:px-2">
          <h1 className="font-bold text-2xl text-[#7444db]">
            Your Company Name
          </h1>
          <p className="mt-2 text-md font-semibold  text-gray-500">
            What would you like to give your company name? You can change this
            later.
          </p>
        </div>
        <div className="mt-4 flex flex-col items-center  ">
          <Label className="text-lg font-bold ">Company Name</Label>
          <Input
            type="text"
            className="border rounded-xl my-2 text-sm text-center font-semibold focus:placeholder-gray-500 max-w-[55%] max-[600px]:max-w-[100%]"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Example , JobHunt MicroSoft etc...."
          />
          <div className="flex gap-8 mt-4">
            <Button
              className="bg-red-500 text-white rounded-xl hover:bg-red-700 text-md"
              onClick={() => navigate("/admin/companies")}
            >
              Cancel
            </Button>
            <Button
              className="bg-[#7444db] text-white rounded-xl hover:bg-[#563992] text-md"
              onClick={registerNewCompany}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CreateNewCompany;
