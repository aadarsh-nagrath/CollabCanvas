"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
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
            <Button>
                Enter&nbsp;
                <span className="text-[#e29269]">Collab</span>
                <span className="text-[#c13162]">Canvas</span>
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    );
}