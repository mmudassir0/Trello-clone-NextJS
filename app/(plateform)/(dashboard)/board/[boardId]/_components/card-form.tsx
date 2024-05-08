"use client";

import { forwardRef } from "react";
import { Plus, X } from "lucide-react";

import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";
import { FormSubmit } from "@/components/form/form-submit";
import { FormTextarea } from "@/components/form/form-textarea";
import { Button } from "@/components/ui/button";

interface CardFormProps {
  listId: string;
  isEditing: boolean;
  enableEditing: () => void;
  disableEditing: () => void;
}
const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, isEditing, enableEditing, disableEditing }, ref) => {
    if (isEditing) {
      return (
        <form className="m-1 py-0.5 px-1 space-y-4">
          <FormTextarea
            id="title"
            onKeyDown={() => {}}
            ref={ref}
            placeholder="Enter a title for this card"
          />
          <input hidden id="listId" name="listId" value={listId} />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add Card</FormSubmit>
            <Button onClick={disableEditing} variant={"ghost"} size="sm">
              <X className="w-5 h-5" />
            </Button>
          </div>
        </form>
      );
    }
    return (
      <div className="pt-2 px-2">
        <Button
          className="h-auto px-2 py-1.5 w-full justify-start
         text-muted-foreground text-sm"
          size="sm"
          variant={"ghost"}
          onClick={enableEditing}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add a Card
        </Button>
      </div>
    );
  }
);
export default CardForm;

CardForm.displayName = "CardForm";
