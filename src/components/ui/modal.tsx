"use client";
import { ImCross } from "react-icons/im";
import { useClickOutside } from "@/hooks/useClickOutside";
import useEscapeKeydown from "@/hooks/useEscapeKeydown";
import useOverflowEffect from "@/hooks/useOverflowEffect";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const redirect = () => {
    router.back();
  };

  useOverflowEffect('modal-scroll-disabled', []);
  useEscapeKeydown(redirect);
  useClickOutside(redirect, ref);

  return (
    <section className="absolute left-0 top-0 z-[1000] flex h-full w-full flex-col items-center justify-center bg-black/10 backdrop-blur-sm">
      <div ref={ref} className="relative w-full bg-main sm:w-[500px]">
        <button
          onClick={redirect}
          className="absolute -top-14 right-2 rounded-full bg-white p-2 sm:hover:opacity-75 md:-right-12 md:-top-12 duration-200"
        >
          <ImCross size={30} className=" text-main" />
        </button>
        {children}
      </div>
    </section>
  );
}
