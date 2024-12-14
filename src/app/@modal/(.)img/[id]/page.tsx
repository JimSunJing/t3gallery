import { getImageById } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  const NumberId = Number(photoId);
  if (Number.isNaN(NumberId)) throw Error("Invalid Photo ID");
  const image = await getImageById(NumberId);
  return (
    <div className="flex items-center justify-center bg-black bg-opacity-50">
      <img src={image.url} alt={image.name} className="w-96" />
    </div>
  );
}
