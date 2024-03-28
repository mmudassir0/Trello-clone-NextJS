"use client";

import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useFormState } from "react-dom";

const Form = () => {
  const initialState = { message: "", error: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <Input
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border border-black p-1"
        />
        {state?.errors?.title ? (
          <div>
            {state?.errors?.title.map((error) => (
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
