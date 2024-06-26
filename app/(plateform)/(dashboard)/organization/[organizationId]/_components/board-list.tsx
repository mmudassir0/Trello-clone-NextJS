import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { HelpCircle, User2 } from "lucide-react";

import { db } from "@/lib/db";
import { FormPopOver } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

const BoardList = async () => {
  const { orgId } = auth();
  if (!orgId) {
    return redirect("/select-org");
  }
  const boards = await db.board.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6  mr-2" />
        Your Boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            href={`/board/${board.id}`}
            key={board.id}
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-sm h-full w-full p-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="reletive font-semibold text-white">{board.title}</p>
          </Link>
        ))}
        <FormPopOver sideOffset={10} side="right">
          <div
            role="button"
            className="aspect-video relative rounded-sm w-full h-full bg-muted flex flex-col items-center justify-center gap-y-1 hover:opacity-75 transition p-2"
          >
            <p className="text-sm">Create New Board</p>
            <span className="text-xs">5 remaining</span>
            <Hint
              sideOffset={40}
              description={`Free workspaces can have upto 5 open boards. For unlimited boards please upgrade workspace.`}
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px] " />
            </Hint>
          </div>
        </FormPopOver>
      </div>
    </div>
  );
};

export default BoardList;

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4 ">
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
      <Skeleton className="aspect-video w-full h-full p-2" />
    </div>
  );
};
