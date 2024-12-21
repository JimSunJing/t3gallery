import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImageById } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImageById(props.id);
  const client = await clerkClient();
  const uploaderInfo = await client.users.getUser(image.userId);
  if (!uploaderInfo) {
    throw new Error("User Not Found");
  }
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="h-full w-full flex-shrink object-contain object-center"
        />
      </div>
      <div className="flex min-w-96 flex-grow flex-col items-center justify-center border-l">
        <div className="w-96 break-words border-b border-slate-500 p-2 text-center text-xl">
          {image.name}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded By</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created On</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(props.id);
            }}
          >
            <Button variant="destructive" type="submit">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
