import { IoHome, IoInformationCircle, IoMail } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";
import { FcBiotech } from "react-icons/fc";

export const navLinks = [
  { href: "/", label: 'Home', Icon: IoHome },
  { href: "/about", label: 'About', Icon: IoInformationCircle },
  { href: "/contacts", label: 'Contacts', Icon: IoMail },
  { href: "/photos", label: 'Gallery', Icon: AiFillPicture },
  { href: "/dashboard", label: 'Dashboard', Icon: MdDashboard },
  { href: "/animation", label: 'Animation', Icon: FcBiotech },
  { href: "/auth", label: 'Login', Icon: TbLogin2 },
]


