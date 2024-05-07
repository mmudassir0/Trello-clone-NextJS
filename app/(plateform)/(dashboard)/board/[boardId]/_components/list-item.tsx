"use client";

import { ElementRef, useRef, useState } from "react";
import { ListWithCards } from "@/types";
import ListHeader from "./list-header";
import CardForm from "./card-form";

interface ListItemProps {
  index: number;
  data: ListWithCards;
}
const ListItem = ({ index, data }: ListItemProps) => {
  const textareaRef = useRef<ElementRef<"textarea">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const disableEditing = () => {
    setIsEditing(false);
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      textareaRef.current?.focus();
    });
  };
  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <div className=" w-full rounded-md bg-[#f1f2f4] shadow-md pb-2">
        <ListHeader onAddCard={enableEditing} data={data} />
        <CardForm
          listId={data.id}
          ref={textareaRef}
          isEditing={isEditing}
          enableEditing={enableEditing}
          disableEditing={disableEditing}
        />
      </div>
    </li>
  );
};

export default ListItem;
