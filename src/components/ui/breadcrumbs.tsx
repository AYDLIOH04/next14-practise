import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: any[] }) => {
  return (
    <ul className="flex flex-row items-center gap-0.5">
      {breadcrumbs.slice(0, -1).map(({ text, href }, bcIndex) => (
        <li key={bcIndex} className="flex flex-row items-center gap-0.5">
          {href.length ? (
            <Link
              href={href}
              className="relative after:absolute after:-bottom-[2px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:duration-500 hover:after:w-full"
            >
              {text}
            </Link>
          ) : (
            <span>{text}</span>
          )}
          <IoIosArrowForward className="text-white/50" />
        </li>
      ))}
      <li className="font-bold">{breadcrumbs.at(-1).text}</li>
    </ul>
  );
};

export default Breadcrumbs;
