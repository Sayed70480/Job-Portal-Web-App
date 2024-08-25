import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
const category = [
  "FrontEnd Developer",
  "BackEnd Developer",
  "Data Science python",
  "Python Devloper",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Html Developer",
  "Java Developer",
  "JavaScript Developer",
  "React Developer",
  "Next Developer",
  "Graphic Designer",
];

function CategoryCarousel() {

  


  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20 ">
        <CarouselContent>
          {category.map((categories, index) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 " key={index}>
              <Button variant="outline" className="rounded-full border border-[#6A38C2] hover:bg-[#6A38C2] hover:text-white text-[#6A38C2]" >
                {categories}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="cursor-pointer border-[#6A38C2] hover:bg-[#6A38C2] text-[#6A38C2] hover:text-white " />
        <CarouselPrevious className="cursor-pointer border-[#6A38C2] hover:bg-[#6A38C2] text-[#6A38C2] hover:text-white " />
      </Carousel>
    </div>
  );
}

export default CategoryCarousel;
