import { Modal, PhotoCard } from "@/components/ui";
import { photos } from "@/constants";
import { PhotoType } from "@/types";

const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
  const photo: PhotoType = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <PhotoCard {...photo} />
    </Modal>
  );
};

export default PhotoModal;
