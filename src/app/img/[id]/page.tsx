import FullPageImageView from "~/components/full-page-image-view";

export default function PhotoPage({ params }: { params: { id: string } }) {
  const photoId = params.id;
  const NumberId = Number(photoId);
  if (Number.isNaN(NumberId)) throw Error("Invalid Photo ID");
  return <FullPageImageView id={NumberId} />;
}
