"use client";


import { Id } from "@/convex/_generated/dataModel";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ItemsProp {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick: () => void;
  icon: LucideIcon; 
}

export const Items = ({label, onClick, icon: Icon, active,documentIcon, id, expanded, isSearch, level=0, onExpand}: ItemsProp) => {
    
    const ChevronIcon = expanded? ChevronDown : ChevronRight;
    
    return (
    <div
    className={
        cn("group min-h-[27px] flex items-center space-x-2 text-sm p-3 w-full text-muted-foreground hover:bg-primary/5 dark:hover:bg-primary/5",
        active && "bg-primary/5 text-primary"
    )}
    onClick={onClick}
    role="button"
    style={{paddingLeft: level ? `${(level*12)+12}px` :"12px"}}
    >
        {!!id && (
            <div role="button" 
                className="h-full rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-700" 
                onClick={onExpand}
            >
                <ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground" />

            </div>
        )}
        {documentIcon ? (
            <div className="shrink-0 h-[18px] text-muted-foreground mr-2 text-[12px]">
                {documentIcon}
            </div>
        ) : (
            <Icon className="shrink-0 h-[18px] text-muted-foreground mr-2" />
        )}
        <span className="truncate ">{label}</span>
        {isSearch && (
            <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 px-1.5 font-mono font-medium opacity-100 text-[10px] border border-gray-300 rounded py-1 text-muted-foreground bg-gray-100 hover:bg-gray-200 transition">
                <div>
                    <span className="text-sm text-muted-foreground">⌘ + </span>
                    <span className="text-sm text-muted-foreground">K</span>
                </div>
            </kbd>
        )}
    </div>
  )
}
