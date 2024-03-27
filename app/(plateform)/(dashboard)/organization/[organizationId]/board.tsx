import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import React from "react";

interface Boardprops {
  title: string;
  id: string;
}
const Board = ({ id, title }: Boardprops) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <div>
      <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
        Name:{title}
        <Button variant={"destructive"} size={"sm"} type="submit">
          Delete
        </Button>
      </form>
    </div>
  );
};

export default Board;
