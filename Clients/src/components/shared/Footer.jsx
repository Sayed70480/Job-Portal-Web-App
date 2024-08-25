import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className=" flex  max-w-[85%]   mx-auto justify-center">
      {/* <div className="flex  mx-auto px-4 justify-center"> */}
        <div className="flex gap-5 md-flex-row justify-between items-center w-full py-4">
          <div className="md-4 md:mb-0">
            <h2 className="text-xl text-[#6A38C2] font-bold">Jobs Hunt Web App</h2>
            </div>
            <p className="text-sm">@ 2024 Your Company. All rights reserved</p>
          <div className="flex flex-row space-x-4 ">
            <a
              href="https://facebook.com"
              className="text-blue-500 border-[1px]  p-2 rounded-full hover:bg-blue-500 hover:text-white h-9 w-9 flex justify-center items-center"
              aria-label="Facebook"
            >
              <Facebook className="size-8" />
            </a>
            <a
              href="https://twitter.com"
              className="text-blue-500 border-[1px]  p-2 rounded-full hover:bg-blue-500 hover:text-white h-9 w-9 flex justify-center items-center"
              aria-label="twitter"
            >
              <Twitter className="size-8" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-500 border-[1px]  p-2 rounded-full hover:bg-blue-500 hover:text-white h-9 w-9 flex justify-center items-center"
              aria-label="linkedin"
            >
              <Linkedin className="size-8" />
            </a>
         
          </div>
        </div>
      {/* </div> */}
    </footer>
  );
}

export default Footer;
