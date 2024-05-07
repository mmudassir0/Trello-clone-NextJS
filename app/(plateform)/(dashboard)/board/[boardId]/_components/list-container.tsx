"use client";

import { ListWithCards } from "@/types";
import ListForm from "./list-form";

interface ListContainerProps {
  boardId: string;
  data: ListWithCards[];
}
const ListContainer = ({ boardId, data }: ListContainerProps) => {
  return (
    <div>
      <ol>
        <ListForm />
        <div className=" flex-shrink-0 w-1" />
      </ol>
    </div>
  );
};

export default ListContainer;
