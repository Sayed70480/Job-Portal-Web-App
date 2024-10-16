import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useGetCompanyById from "@/hooks/useGetCompanyById";
import store from "@/redux/store";
import { COMPANY_API_END_POINT } from "@/utils/constants";
import axios from "axios";
import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

function CompanySetup() {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const { singleCompany  } = useSelector(store => store.company);
  const [loading, setLoading] = useState(false);
  const companyId = useParams();
  const navigate = useNavigate();

  const changeEventHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const changeFileEventHandler = (event) => {
    const file = event.target.files?.[0];
    setInput({
      ...input,
      file,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);

    if (input.file) {
      formData.append("file", input.file);
    }
    //here send data to backend
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${companyId.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        navigate("/admin/companies");
        toast.success(res?.data?.message);
        
      }
      console.log(res.data.company);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div>
      <Navbar />
      <div className="max-w-[85%] mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex justify-between items-center border p-5 rounded-xl bg-gray-100 ">
            <Button
              variant="outline"
              className=" flex items-center  gap-2 rounded-xl hover:bg-white"
              onClick={() => navigate("/admin/companies")}
            >
              <ArrowLeft className="size-5" />
              <span className="font-bold text-lg">Back</span>
            </Button>
            <h1 className=" text-2xl  font-semibold text-[#7444db]">
              Company Setup
            </h1>
          </div>
          <div className="w-[60%] mx-auto grid grid-cols-2 gap-5  text-center my-2 items-center">
            <div>
              <Label className="text-lg   ">Company Name</Label>
              <Input
                type="text"
                name="name"
                value={input?.name}
                className="font-semibold text-md rounded-xl text-center  mx-auto mt-1 focus:placeholder-gray-500 "
                onChange={changeEventHandler}
              />
            </div>

            <div>
              <Label className="text-lg   ">Description</Label>
              <Input
                type="text"
                name="description"
                value={input?.description}
                className="font-semibold text-md rounded-xl text-center   mt-1 focus:placeholder-gray-500 "
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label className="text-lg   ">Website</Label>
              <Input
                type="text"
                name="website"
                value={input?.website}
                className="font-semibold text-md rounded-xl text-center mt-1 focus:placeholder-gray-500 "
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label className="text-lg   ">Location</Label>
              <Input
                type="text"
                name="location"
                value={input?.location}
                className="font-semibold text-md rounded-xl text-center  mt-1 focus:placeholder-gray-500 "
                onChange={changeEventHandler}
              />
            </div>
          </div>
          <div className=" w-[60%] mx-auto text-center">
            <Label className="text-lg   ">Logo</Label>
            <Input
              type="file"
              name="location"
              // value={input?.file}
              className="font-semibold text-md rounded-xl text-center  mt-1 focus:placeholder-gray-500 "
              accept="image/*"
              onChange={changeFileEventHandler}
            />
          </div>
          <div className="flex items-center">
            {loading ? (
              <Button className="  mt-4 w-[60%]  items-center mx-auto">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                for updating...
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-[#7444db] mt-4  rounded-xl w-[60%] mx-auto text-white font-semibold text-md hover:bg-[#49337b]"
              >
                Update
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default CompanySetup;
