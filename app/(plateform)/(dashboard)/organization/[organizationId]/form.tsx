// "use client";

import { create } from "@/actions/createBoard";
import { Button } from "@/components/ui/button";

import { useFormState } from "react-dom";

const Form = () => {
  const initialState = { message: null, error: {} };
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        className="border border-black p-1"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
export default Form;
