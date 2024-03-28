"use server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string().min(3, { message: "minimum 3 Letter required" }),
});
export type State = {
  message?: string | null;
  errors?: {
    title?: string[];
  };
};
export async function create(prevState: State, formData: FormData) {
  const validatedField = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      message: "missing fields",
    };
  }
  const { title } = validatedField.data;
  try {
    await db.board.create({
      data: { title },
    });
  } catch (error) {
    return { message: "database error" };
  }
  revalidatePath("/organization/org_2eCLN7EeOnOPQaz7fwkrfSdUZf3");
  redirect("/organization/org_2eCLN7EeOnOPQaz7fwkrfSdUZf3");
}
