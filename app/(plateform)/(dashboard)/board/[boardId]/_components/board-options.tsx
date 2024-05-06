"use client";

import { MoreHorizontal, X } from "lucide-react";
import { deleteBorad } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopOverClose,
} from "@/components/ui/popover";
import { toast } from "sonner";

interface BoardOptionsProps {
  id: string;
}
export const BoardOptions = ({ id }: BoardOptionsProps) => {
  const { execute, isLoading } = useAction(deleteBorad, {
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    execute({ id });
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant={"transparent"}>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="px-0 pt-3 pb-3" side="bottom" align="start">
        <div className="text-sm font-medium text-center text-neutral-600 pb-4">
          Creare Action
        </div>
        <PopOverClose asChild>
          <Button
            className="h-auto w-auto p-2 absolute top-2 right-2 text-neytral-600"
            variant={"ghost"}
          >
            <X className="h-4 w-4" />
          </Button>
        </PopOverClose>
        <Button
          variant={"ghost"}
          onClick={onDelete}
          disabled={isLoading}
          className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
        >
          Delete this board
        </Button>
      </PopoverContent>
    </Popover>
  );
};
