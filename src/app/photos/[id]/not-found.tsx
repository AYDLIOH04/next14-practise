"use client";

import useTimerRedirect from "@/hooks/useTimerRedirect";

const NotFoundPhoto = () => {
  const redirectSeconds = useTimerRedirect("/photos", 3);

  return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold uppercase mb-2">Not Found</h2>
        <p className="text-white/50">Перенаправление через {redirectSeconds}...</p>
      </div>
    </div>
  );
};

export default NotFoundPhoto;
