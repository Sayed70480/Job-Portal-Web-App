import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
function Navbar() {

const {user , setUser} = useState(false);


  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-[85%] h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#7444db]">Portal</span>
          </h1>
        </div>
        <div className=" flex  gap-10 items-center">
          <ul className="flex font-medium items-center gap-5">
          <Link to='/'><li>Home</li></Link>  
            <li>Jobs</li>
            <li>Browse</li>
            {/* <li><Link>Home</Link></li>
                <li><Link>Jobs</Link></li>
                <li><Link>Browse</Link></li> */}
          </ul>
        {
        !user ? (
        <div className="flex gap-2">
       <Link to='/login'> <Button  className="font-medium">Login</Button></Link>
        <Link to='/signup'><Button  className="bg-[#7444db] rounded-[4px] hover:bg-[#5d4199] hover:text-white font-medium">Signup</Button></Link>
        </div>
        ) :

         <Popover>
            <PopoverTrigger>
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://media.licdn.com/dms/image/D4D35AQFaMoWUvSZubw/profile-framedphoto-shrink_400_400/0/1707029807148?e=1724076000&v=beta&t=oUIvr9J3V4xtkuhdwbDiZroZBd7h7OxpjKEF-Jfubcc" />
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="flex gap-4 space-y-2">
                <Avatar>
                  <AvatarImage src="https://media.licdn.com/dms/image/D4D35AQFaMoWUvSZubw/profile-framedphoto-shrink_400_400/0/1707029807148?e=1724076000&v=beta&t=oUIvr9J3V4xtkuhdwbDiZroZBd7h7OxpjKEF-Jfubcc" />
                </Avatar>
                <div>
                  <h4 className="font-medium">Syed MernStack</h4>
                  <p className="text-justify text-sm text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam fugiat maiores exercitationem corporis nisi, corrupti
                    dicta quia saepe atque expedita non optio laborum maxime
                    quis recusandae ea obcaecati eius? Non.
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-gray-600">
              <div className="flex w-fit items-center gap-3 cursor-pointer ">
                <User2/>
                <Button variant="link">View Profile</Button>
              </div>
              <div className="flex w-fit items-center gap-3 cursor-pointer">
                <LogOut/>
              <Button variant="link">
                  {/* <Link href="/login">Login</Link> */}
                  LogOut
                </Button>
              </div>
              </div>
            </PopoverContent>
          </Popover>
        }


         
        </div>
      </div>
    </div>
  );
}

export default Navbar;
