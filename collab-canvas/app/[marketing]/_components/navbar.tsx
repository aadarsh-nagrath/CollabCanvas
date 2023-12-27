"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export const Navbar = () => {

  const scrolled = useScrollTop();

  return (
    //this is such a cool effect in navbar
    <div className={cn("bg-background z-50 fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm " )}>
      <Logo/>
      <div className=" md:ml-auto md:justify-end w-full justify-between flex items-center gap-x-2 ">
        Login
      </div>
    </div>
  )
}
