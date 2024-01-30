import Breadcrumbs from "@/components/ui/breadcrumbs";
import photos from "@/constants/gallery";
import Image from "next/image";
import Link from "next/link";

const Feed = () => {
  return (
    <section>
      <div className="container">
        <h1 className="page-title">Gallery</h1>
        <div>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {photos.map(({ id, imageSrc }) => (
              <li key={id}>
                <Link href={`/photos/${id+10}`}>
                  <Image
                    src={imageSrc}
                    height={500}
                    width={500}
                    alt=""
                    className="aspect-square w-full rounded-md object-cover"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Feed;
