import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constants.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import store from "@/redux/store";
import { Loader2 } from "lucide-react";
import Footer from "@/components/shared/Footer";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
 
   
    try {
      dispatch(setLoading(true));
      const user = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
      });

      if (user.data.success) {
        dispatch(setUser(user.data.user))
        navigate("/");
        toast.success(user.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-[85%] mx-auto">
        <form
          action=""
          onSubmit={submitHandler}
          className="w-1/2 border border-[#7444db] rounded-[10px] p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5 text-[#7444db]">Login</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="text"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="rounded-[4px] font-medium border-[#7444db] border-2"
            />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="rounded-[4px] font-medium border-[#7444db] border-2  "
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <RadioGroup className=" flex items-center gap-4 my-5">
              <div className="flex items-center justify-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="border-[#7444db] border-2  cursor-pointer "
                />

                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="border-[#7444db] border-2 cursor-pointer "
                />
                <Label htmlFor="option-two">Recruiter </Label>
              </div>
            </RadioGroup>
          </div>
      <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-center">
       {loading? (
            <a className="w-full flex items-center justify-center mt-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait...
            </a>
          ) : (
            <Button
              type="submit"
              className="bg-[#7444db] rounded-[4px] hover:bg-[#5d4199] text-white w-full my-4  "
            >
              Login
            </Button>
          )}
       </div>
          <div className="flex justify-start w-full ">
            if don't have Account?
            <Link to="/signup" className="text-[#7444db] font-semibold ml-[1px]">
              Signup
            </Link>
          </div>
      </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
