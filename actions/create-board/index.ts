"use server";

import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBoard } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { userId } = auth();
  if (!userId) {
    return { error: "unauthorized" };
  }
  const { title } = data;
  let board;
  try {
    board = await db.board.create({
      data: { title },
    });
  } catch (err) {
    return {
      error: "Failed to create board.",
    };
  }
  revalidatePath(`/board/${board.id}`);
  return { data: board };
};
export const createBoard = createSafeAction(CreateBoard, handler);
