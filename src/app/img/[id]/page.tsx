import FullPageImageView from "~/components/full-page-image-view";

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const NumberId = Number(photoId);
  if (Number.isNaN(NumberId)) throw Error("Invalid Photo ID");
  return <FullPageImageView id={NumberId} />;
}
