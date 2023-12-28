import { Loader } from "lucide-react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
    "text-muted-foreground animate-spin",
    {
        variants: {
            size: {
                default: "h-4 w-4",
                sm: "h-2 w-2",
                lg: "h-6 w-6",
                icon: "h-10 w-10"
            }
        },
        defaultVariants: {
            size: "default",
        },
    },
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({size,}:SpinnerProps) => {
    return(
        <Loader className={cn(spinnerVariants({size}))} />
    );
};

//Learnings
// spinnerVariants:
// Describes different variations or options for a spinner, like its size or color.
// VariantProps<typeof spinnerVariants>:
// Represents the set of properties that a component with variations (like a spinner) can accept. It's a generic type that takes spinnerVariants as its structure.
// interface SpinnerProps extends VariantProps<typeof spinnerVariants>:
// Creates an interface named SpinnerProps that says, "Hey, any component using these properties must follow the structure defined in spinnerVariants."