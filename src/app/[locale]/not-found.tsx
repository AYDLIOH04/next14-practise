"use client";

import { useTimerRedirect } from "@/hooks";
import { useLocale } from "next-intl";

const NotFound = () => {
  const locale = useLocale();
  const timer = useTimerRedirect(`/${locale}`, 3);
  return (
    <div className="flex h-[95vh] w-full items-center justify-center text-center">
      <div className="flex flex-col gap-2">
        <h1 className="page-title mb-0">
          Page<span className="ml-1 text-accent"> Not Found!</span>
        </h1>
        <p>Redirection via {timer}...</p>
      </div>
    </div>
  );
};

export default NotFound;
