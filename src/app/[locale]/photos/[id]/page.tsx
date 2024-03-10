import { photos } from "@/constants";
import { Breadcrumbs, PhotoCard } from "@/components/ui";
import { notFound } from "next/navigation";
import { PhotoType } from "@/types";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: PhotoType = photos.find((p) => p.id === id)!;

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
  const photo: PhotoType = photos.find((p) => p.id === id)!;

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
