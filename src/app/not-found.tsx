"use client";

import { useTimerRedirect } from "@/hooks";
import Cookies from "js-cookie";

const NotFound = () => {
  const locale = Cookies.get("NEXT_LOCALE");
  const timer = useTimerRedirect(`/${locale}`, 3);

  return (
    <html lang={locale}>
      <body>
        <div className="flex h-[95vh] w-full items-center justify-center text-center">
          <div className="flex flex-col gap-2">
            <h1 className="page-title mb-0">
              Language<span className="ml-1 text-accent"> Not Found!</span>
            </h1>
            <p>Redirection via {timer}...</p>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
