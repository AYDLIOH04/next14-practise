import { Modal } from "@/components/ui/modal";
import PhotoCard from "@/components/ui/photo-card";
import photos, { Photo } from "@/constants/gallery";

const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <Modal>
      <PhotoCard {...photo} />
    </Modal>
  );
};

export default PhotoModal;
