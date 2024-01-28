import { isEscapeKey } from "@/lib/utils";
import { useEffect } from "react";

const useEscapeKeydown = (callback: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (isEscapeKey(event)) {
        callback();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [callback]);
};

export default useEscapeKeydown;
