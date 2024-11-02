import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import useGetAlljobs from "@/hooks/useGetAlljobs";

const filterData = [
  {
    filterType: "Location",
    area: ["Islamabad", "Peshawar", "Krachi", "Swat", "Lahore", "Gilget"]
  },
  {
    filterType: "Skill",
    area: ["Frontend Developer ", "Backend Developer", "Fullstack Developer", "Mern Stack "],
  },
  {
    filterType: "Salary",
    area: ["0-40K", "42-1Lakh", "1Lack-2Lakh", "2Lack-4Lakh "],
  }
]

function FilterCard() {

  const [selectedValue, setSelectedValue] = useState('');
 const dispatch = useDispatch()
  const handleChange = (value) => {
    setSelectedValue(value)
  }
  useEffect(()=>{
    dispatch(setSearchQuery(selectedValue))

  },[selectedValue])
  return (
    <div>
      <h1 className="font-bold text-lg text-[#7444db] ">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup value={selectedValue} onValueChange={handleChange} >
        {filterData.map((items, index) => (
          <div key={index} className=" max-[600px]:flex max-[600px]: max-[600px]:flex-wrap max-[600px]:items-center  max-[600px]:gap-5" >
            <h1 className="font-bold text-[#7444db] ">{items.filterType}</h1>
            {items.area.map((data, idx) => {
              const itemId = `r${index}-${idx}`
              return (
                <div className="flex gap-5 mt-3 max-[600px]:gap-1 max-[600px]:mt-0">
                  <RadioGroupItem value={data} id={itemId} className="text-[#7444db]" />
                  <Label htmlFor={itemId} className="text-gray-600">{data}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}

export default FilterCard;
