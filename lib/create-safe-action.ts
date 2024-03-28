import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutout> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutout;
};

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validatedResult = schema.safeParse(data);
    if (!validatedResult.success) {
      return {
        fieldErrors: validatedResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
        error: "invalid data",
      };
    }
    return handler(validatedResult.data);
  };
};
