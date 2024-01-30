import photos, { Photo } from "@/constants/gallery";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import PhotoCard from "@/components/ui/photo-card";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: Photo = photos.find((p) => p.id === id)!;

  return {
    title: `Photo ${id}`,
    openGraph: {
      title: `Photo ${id}`,
      description: `Taken by ${photo.name} | ${photo.username}`,
      images: [photo.imageSrc],
      url: photo.href,
    },
  };
}

const Photo = ({ params: { id } }: { params: { id: string } }) => {
  const photo: Photo = photos.find((p) => p.id === id)!;

  if (!photo) {
    notFound();
  }

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
