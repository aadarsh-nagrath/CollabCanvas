"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import {api} from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { user } = useUser();
    const create = useMutation(api.document.create);

    //creating a simple handler
    const handleCreate = () => {
        const promise = create({title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating document...",
            success: "Document created!",
            error: "Error creating document",
        });
    };

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col items-center">
        <Image src="/empty.png" alt="empty" width="300" height="300" className="dark:hidden" />
        <Image src="/empty-dark.png" alt="empty" width="300" height="300" className="hidden dark:block" />
      </div>
      <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s Collab Canvas</h2>
      <Button onClick={handleCreate} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <PlusCircle className="h-5 w-5 mr-2" />
        Create a document
      </Button>
    </div>
  );
};

export default DocumentsPage;
