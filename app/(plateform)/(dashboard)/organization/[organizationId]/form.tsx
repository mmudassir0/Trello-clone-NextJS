"use client";

import { createBoard } from "@/actions/create-board";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { FormSubmit } from "@/components/form/form-submit";
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
        <FormInput id="title" label="Board Title" errors={fieldErrors} />
      </div>

      <FormSubmit variant="primary">Submit</FormSubmit>
    </form>
  );
};
export default Form;
