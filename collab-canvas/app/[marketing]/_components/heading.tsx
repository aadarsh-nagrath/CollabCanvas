"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const {isAuthenticated, isLoading } = useConvexAuth();

    return(
        <div className="max-w-3xl space-y-4 ">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold ">
                Your Ideas, Docs & Plans Unified. Welcome to 
                <span className="underline">CollabCanvas</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium  ">
                CollabCanvas is the connected workspace where <br/>
                better, faster and efficient work happens.
            </h3>
            {isLoading && (
                <div className="w-full justify-center flex items-center">
                    <Spinner size="lg" />
                </div>
            )}

            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link  href="/documents">
                        Enter&nbsp;
                        <span className="text-[#e29269]">Collab</span>
                        <span className="text-[#c13162]">Canvas</span>
                        <ArrowRight className="h-4 w-4 ml-2"/>
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get CollabCanvas Free
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </SignInButton>
            )}
        </div>
    );
}