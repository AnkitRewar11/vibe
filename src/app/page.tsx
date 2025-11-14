"use client";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page =  () => {
  const trpc = useTRPC();
  const Invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background Job Invoked Successfully");
    }
  }));
  
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <button disabled = {Invoke.isPending} onClick={()=> Invoke.mutate({text : "Ankit"})} className="px-4 py-2 bg-black text-white rounded hover:bg-blue-700">
        Invoke Background Job
      </button>
    </div>

  );
};

export default Page;  
