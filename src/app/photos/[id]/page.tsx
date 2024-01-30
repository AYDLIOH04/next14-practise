import photos, { Photo } from "@/constants/gallery";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import PhotoCard from "@/components/ui/photo-card";

const Photo = ({ params: { id } }: { params: { id: string } }) => {
  const photo: Photo = photos.find((p) => p.id === id)!;

  return (
    <section>
      <div className="container">
        <Breadcrumbs
          breadcrumbs={[
            { text: "Gallery", href: "/photos" },
            { text: `Photo ${id}`, href: `/photos/${id}` },
          ]}
        />
        <div className="mt-10">
          <PhotoCard {...photo} />
        </div>
      </div>
    </section>
  );
};

export default Photo;
