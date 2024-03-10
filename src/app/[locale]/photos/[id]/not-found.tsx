"use client";

import { useTimerRedirect } from "@/hooks";

const NotFoundPhoto = () => {
  const redirectSeconds = useTimerRedirect("/photos", 3);

  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="text-center">
        <h2 className="mb-2 text-4xl font-bold uppercase">Not Found</h2>
        <p className="text-white/50">
          Перенаправление через {redirectSeconds}...
        </p>
      </div>
    </div>
  );
};

export default NotFoundPhoto;
