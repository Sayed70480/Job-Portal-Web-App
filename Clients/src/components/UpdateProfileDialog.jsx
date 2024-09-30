import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import axios, { Axios } from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map((skill) => skill),
    file: user?.profile?.resume,
  });

  
  
  const changeEventHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };
  const fileHandler = (e) => {
   
    setInput({
      ...input,
      file : e.target.files?.[0],
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true)
      const res = await axios.post(
        `${USER_API_END_POINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
    console.log(res.data.user);
    
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
      setOpen(false);
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message);
    }
    finally{
      setLoading(false)
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="bg-white border  border-[#7444db] sm:max-w-[445px] "
          onInteractOutside={() => setOpen()}
        >
          <DialogHeader>
            <DialogTitle className="text-[#7444db] font-bold">
              Update Profile
            </DialogTitle>
          </DialogHeader>
          <form action="" onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-right text-md ">
                  Name
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  name="fullname"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  className="col-span-3 rounded-2xl text-md font-semibold border-[#7444db]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right text-md">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  className="col-span-3 rounded-2xl text-md font-semibold border-[#7444db]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right text-md">
                  Number
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
               
                  className="col-span-3 rounded-2xl text-md font-semibold border-[#7444db]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-right text-md">
                  Bio
                </Label>
                <Input
                  id="bio"
                  type="text"
                  name="bio"
                  value={input.bio}
                  onChange={changeEventHandler}
                  className="col-span-3 rounded-2xl text-md font-semibold border-[#7444db]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-right text-md">
                  Skills
                </Label>
                <Input
                  id="skills"
                  type="text"
                  name="skills"
                  value={input.skills}
                  onChange={changeEventHandler}
                  className="col-span-3 rounded-2xl text-md font-semibold border-[#7444db]"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-right text-md">
                  Resume
                </Label>
                <Input
                  id="file"
                  type="file"
                  name="file"
                  onChange={fileHandler}
                  value={input.files}
                  accept="application/pdf"
                  className="col-span-3 rounded-2xl text-md font-semibold border-[#7444db]"
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <h1 className="mt-4 flex justify-center items-center w-full text-lg font-semibold">
                  <Loader2 className="mr-2 h-6  w-6 animate-spin" /> Please
                  wait...
                </h1>
              ) : (
                <Button
                  type="submit"
                  className="bg-[#7444db] rounded-[4px] hover:bg-[#5d4199] text-white w-full mt-4  "
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
