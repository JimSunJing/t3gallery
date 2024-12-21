import FullPageImageView from "~/components/full-page-image-view";
import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const NumberId = Number(photoId);
  if (Number.isNaN(NumberId)) throw Error("Invalid Photo ID");
  return (
    <Modal>
      <FullPageImageView id={NumberId} />
    </Modal>
  );
}
