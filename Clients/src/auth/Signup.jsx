import React, { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
      });



  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };

  const submitHandler = async (e) =>{
    e.preventDefault();
    console.log(e);
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-[85%] mx-auto">
        <form
          action=""
          onSubmit={submitHandler}
          className="w-1/2 border border-[#7444db] rounded-[10px] p-4 my-10 "
        >
          <h1 className="font-bold text-xl mb-5 text-[#7444db]">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              className="rounded-[4px] font-medium border-[#7444db] border-2"
            />
          </div>
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
            <Label>Phone Number</Label>
            <Input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
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
              className="rounded-[4px] font-medium border-[#7444db] border-2"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <RadioGroup className=" flex items-center gap-4 my-5">
              <div className="flex items-center justify-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Student"
                  checked = {input.role === "Student"}
                  onChange={changeEventHandler}
                  className="border-[#7444db] border-2  cursor-pointer "
                />

                <Label htmlFor="option-one">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="Recruiter"
                  checked = {input.role === "Recruiter"}
                  onChange={changeEventHandler}
                  className="border-[#7444db] border-2 cursor-pointer "
                />
                <Label htmlFor="option-two">Recruiter </Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile </Label>
              <Input
                accept="image/*"
                type="file"
                name="file"
                value={input.files}
                onChange={changeFileHandler}
                className="rounded-[4px] font-medium border-[#7444db] border-2 cursor-pointer"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="bg-[#7444db] rounded-[4px] hover:bg-[#5d4199] hover:text-white w-full my-4  "
          >
            SignUp
          </Button>
          <span>
            Already have account?{" "}
            <Link to="/login" className="text-[#7444db] font-semibold">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
