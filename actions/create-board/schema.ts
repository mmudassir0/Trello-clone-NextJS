import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string({
      required_error: "title is required",
      invalid_type_error: "title must be a string",
    })
    .min(3, {
      message: "Title is too short",
    }),
  image: z.string({
    required_error: "Image is required",
    invalid_type_error: "Image ",
  }),
});
