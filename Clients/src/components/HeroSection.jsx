import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const [query , setQuery] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const searchJobHandler = async(e) => {
    e.preventDefault()  
   dispatch( setSearchQuery(query))
   navigate("/browse")
  }
  return (
    <div className="text-center">
      <div className="flex flex-col  gap-5 my-10">
      <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium animate-pulse " >Jobs Hunt Web App</span>
      <h1 className="text-3xl font-bold">Search, Apply & <br/> Get Your <span className="text-[#6A38C2]">Dream Jobs</span> </h1>
      <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe assumenda ullam earum? Ullam, voluptatibus!</p>
      <div className="flex w-[40%]  shadow-lg border border-gray-300 rounded-full pl-3 items-center gap-4 mx-auto ">
        <Input
        type="text"
        placeholder="Find your dream jobs"
        onChange = {(e)=>setQuery(e.target.value)}
        className="outline-none  border-none w-full font-semibold "
        />
        <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#502c8f] text-[#ffffff] "> <Search className="h-5 w-5 " /> </Button>
      </div>
      </div>
    
  </div>
  )
}

export default HeroSection;
