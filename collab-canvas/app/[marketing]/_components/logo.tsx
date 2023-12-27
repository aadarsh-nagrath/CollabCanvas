import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
// we get cn when we install shadcn ui, cn library will be used to dynamically append our tailwind elements without the fear of overriding or incorrect merging.


const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo =() => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image src ="/collab-logo.svg" alt="logo" height="40" width="40" />
            <p className={cn("font-semibold", font.className)}>
                CollabCanvas
            </p>
        </div>
    );
}