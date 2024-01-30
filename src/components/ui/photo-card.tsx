import { Photo } from "@/constants/gallery";
import Image from "next/image";
import { FaXTwitter, FaTwitter } from "react-icons/fa6";

const PhotoCard = ({ imageSrc, name, username }: Photo) => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Image
          src={imageSrc}
          width={500}
          height={500}
          alt=""
          className="aspect-square rounded-md object-cover"
        />
      </div>
      <div className="mb-4 ml-4 mt-2 flex flex-row items-center">
        <div className="mr-5 flex flex-col">
          <p className="text-3xl">{name}</p>
          <p className="text-white/60">
            Taken by <span className="text-accent">{username}</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-2 text-3xl">
          <FaXTwitter />
          <span className=" h-10 w-1 rounded-md bg-white/45" />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
