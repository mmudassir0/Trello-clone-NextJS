"use client";

import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAction } from "@/hooks/use-action";

import { useFormState } from "react-dom";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (error) => {
      console.error(error, "error");
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    execute({
      title,
    });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <Input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border border-black p-1"
        />
        {fieldErrors ? (
          <div>
            {fieldErrors?.title?.map((error) => (
              <p key={error} className="text-rose-500">
                {error}
              </p>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};
export default Form;
