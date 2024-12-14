import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "~/server/db";

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
