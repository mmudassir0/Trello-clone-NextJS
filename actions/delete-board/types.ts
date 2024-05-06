import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { DeleteBorad } from "./schema";

export type InputType = z.infer<typeof DeleteBorad>;
export type ReturnType = ActionState<InputType, Board>;
