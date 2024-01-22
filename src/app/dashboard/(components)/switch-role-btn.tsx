"use client";

import { useAuthStore } from "@/stores";
import { FaUser, FaUserLock } from "react-icons/fa";

export const SwitchRoleButton = () => {
  const { role, switchPermission } = useAuthStore((state) => state);

  const Icon = role === "USER" ? FaUserLock : FaUser;
  const switchToRole = role === "USER" ? "ADMIN" : "USER";

  return (
    <button
      className="rounded-md bg-accent py-2 px-4 flex flex-row items-center justify-center gap-4 group hover:bg-opacity-80 w-[220px]"
      onClick={switchPermission}
    >
      <p>
        Switch to{" "}
        <span className="before:duration-500 relative before:absolute group-hover:before:w-full before:w-0 before:rounded-md before:h-[3px] before:bg-white before:-bottom-1 before:right-0">
          {switchToRole}
        </span>
      </p>{" "}
      <Icon size={22} />
    </button>
  );
};
