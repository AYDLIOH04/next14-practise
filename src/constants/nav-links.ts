import { IoHome, IoInformationCircle, IoMail } from "react-icons/io5";
import { AiFillPicture } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";

export const navLinks = [
  { href: "/", label: 'Home', Icon: IoHome },
  { href: "/about", label: 'About', Icon: IoInformationCircle },
  { href: "/contacts", label: 'Contacts', Icon: IoMail },
  { href: "/gallery", label: 'Gallery', Icon: AiFillPicture },
  { href: "/dashboard", label: 'Dashboard', Icon: MdDashboard },
  { href: "/auth", label: 'Login', Icon: TbLogin2 },
]


