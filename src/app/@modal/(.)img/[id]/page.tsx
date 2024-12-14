import FullPageImageView from "~/components/full-page-image-view";
import { Modal } from "./modal";

export default function PhotoModal({ params }: { params: { id: string } }) {
  const photoId = params.id;
  const NumberId = Number(photoId);
  if (Number.isNaN(NumberId)) throw Error("Invalid Photo ID");
  return (
    <Modal>
      <FullPageImageView id={NumberId} />
    </Modal>
  );
}
