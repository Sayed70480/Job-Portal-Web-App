import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const filterData = [
  {
    filterType : "Location",
    area : ["Islamabad","Peshawar","Krachi","Swat","Lahore","Gilget"]
  },
  {
    filterType : "Industry",
    area : ["Frontend Developer ","Backend Developer", "Fullstack Developer" ,"Mern Stack "], 
  },
  {
    filterType : "Salary",
    area : ["0-40K","42-1Lakh", "1Lack-2Lakh" ,"2Lack-4Lakh "], 
  }
]

function FilterCard() {
  return (
    <div>
      <h1 className="font-bold text-lg text-[#7444db]">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup >
        {filterData.map((items, index) => (
          <div key={index} >
            <h1 className="font-bold text-[#7444db]">{items.filterType}</h1>
            {items.area.map((data, index) => {
              return (
                <div className="flex gap-5 mt-3">
                  <RadioGroupItem value={data} id={data} className="text-[#7444db]" />
                  <Label htmlFor={data} className="text-gray-600">{data}</Label>
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
