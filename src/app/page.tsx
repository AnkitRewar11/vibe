import { caller } from "@/trpc/server";


const Page = async() => {
  const queryClient = await caller.createAI({text : "Ankit Rewar"});

  return (
    <div>
   {JSON.stringify(queryClient)}
    </div>
  );
};

export default Page;
