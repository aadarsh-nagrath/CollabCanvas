"use client";
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";

import {SignOutButton, useUser} from "@clerk/clerk-react";

export const UserItems = () => {
    const {user} = useUser();

    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5 dark:hover:bg-primary/5">
                    <div className="gap-x-2 flex item-center max-w-[150px] ">
                        <Avatar className=" h-8 w-8">
                            <AvatarImage src={user?.imageUrl} alt="avatar" />
                        </Avatar>
                        <span className='text-start font-medium '>
                            {user?.firstName}&apos;s Collab Canvas
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 h-6 w-6 ml-2 text-muted-foreground" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-70' align='start' alignOffset={11}  forceMount>
                <div className='flex flex-col space-y-4 p-2'>
                    <p className='text-xs font-medium leading-none text-muted-foreground ' >{user?.emailAddresses[0].emailAddress}</p>
                </div>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild className='w-full cursor-pointer text-[red] '>
                    <SignOutButton>Log out</SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};