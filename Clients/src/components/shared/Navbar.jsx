import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import store from "@/redux/store";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";
function Navbar() {

  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/profile/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res?.data?.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="bg-white   ">
      <div className="flex  items-center justify-between mx-auto max-w-[85%] h-16 max-md:flex-col max-md:max-w-[100%] max-md:py-20 max-md:gap-4 max-md:justify-center">
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl font-bold">
              Job<span className="text-[#7444db]">Portal</span>
            </h1>
          </Link>
        </div>
        <div className=" flex  gap-10 items-center max-md:flex-col max-md:justify-center max-md:gap-4 ">
          <ul className="flex font-medium items-center gap-5">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to={"/jobs"}>
              <li>Jobs</li>
            </Link>
            <Link to={"/browse"}>
              <li>Browse</li>
            </Link>
          </ul>
          {!user ? (
            <div className="flex gap-2">
              <Link to="/login">
                <Button className="font-medium">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#7444db] rounded-[4px] hover:bg-[#5d4199] text-white font-medium">
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger>
                <Avatar className="cursor-pointer ">
                  <AvatarImage src={user?.profile?. profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white">
                <div className="flex gap-4 space-y-2 ">
                  <Avatar>
                    <AvatarImage src={user?.profile?. profilePhoto} />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Syed MernStack</h4>
                    <p className="text-justify text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Totam fugiat maiores exercitationem corporis nisi,
                      corrupti dicta quia saepe atque expedita non optio laborum
                      maxime quis recusandae ea obcaecati eius? Non.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  <div className="flex w-fit items-center gap-3 cursor-pointer ">
                    <Link to={"/profile"} className="flex items-center">
                      <User2 />
                      <Button variant="link">View Profile</Button>
                    </Link>
                  </div>
                  <div className="flex w-fit items-center gap-3 cursor-pointer">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">
                      LogOut
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
