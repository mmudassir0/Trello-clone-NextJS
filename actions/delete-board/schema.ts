import { z } from "zod";

export const DeleteBorad = z.object({
  id: z.string(),
});
