import { z } from "zod";
import { Board } from "@prisma/client";

import { ActionState } from "@/lib/create-safe-action";

import { UpdateBorad } from "./schema";

export type InputType = z.infer<typeof UpdateBorad>;
export type ReturnType = ActionState<InputType, Board>;
