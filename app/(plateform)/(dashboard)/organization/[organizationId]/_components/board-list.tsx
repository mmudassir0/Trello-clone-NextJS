import { FormPopOver } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { HelpCircle, User2 } from "lucide-react";

const BoardList = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6  mr-2" />
        Your Boards
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 gap-4">
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
