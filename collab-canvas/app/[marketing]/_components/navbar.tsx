"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

export const Navbar = () => {

  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    //this is such a cool effect in navbar
    <div className={cn("bg-background z-50 fixed top-0 flex items-center w-full p-6",
      scrolled && "border-b shadow-sm " )}>
      <Logo/>
      <div className=" md:ml-auto md:justify-end w-full justify-between flex items-center gap-x-2 ">
        {isLoading && (
          <Spinner/>
        )}

        {!isAuthenticated && !isLoading && (
          //mode modal is cool for sign in button
          <>
            <SignInButton mode="modal" >
              <Button variant="ghost" size="sm" >Log in</Button>
            </SignInButton>
            <SignInButton mode="modal" >
              <Button size="sm" >Get Canvas for free</Button>
            </SignInButton>
          </>
        )}

        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link href = "/documents"> Enter Canvas</Link>
            </Button>
            <UserButton
             afterSignOutUrl="/" 
            />
          </>
        )}
        LIGHT-DARK MODE BUTTON HERE
      </div>
    </div>
  )
}


// good way of using clerk to auth here