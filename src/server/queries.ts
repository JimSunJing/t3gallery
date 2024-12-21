import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { redirect, RedirectType } from "next/navigation";

export const getMyImages = async () => {
  const user = await auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => [desc(model.id)],
    where: (model, { eq }) => eq(model.userId, user.userId),
  });
  return images;
};

export const getImageById = async (id: number) => {
  const user = await auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }
  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) {
    throw new Error("Image not found");
  }

  if (image.userId !== user.userId) {
    throw new Error("Unauthorized");
  }
  return image;
};

export const deleteImage = async (id: number) => {
  const user = await auth();

  if (!user.userId) {
    throw new Error("Unauthorized");
  }

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

  // console.log("deleted");
  redirect("/", RedirectType.replace);
};
