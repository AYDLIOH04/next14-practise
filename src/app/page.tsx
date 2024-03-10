import { redirect } from "next/navigation";
import Cookies from "js-cookie";

const LocalePage = () => {
  const locale = Cookies.get("NEXT_LOCALE");

  redirect(`/${locale}`);
};

export default LocalePage;
