import { useEffect } from "react";

const useOverflowEffect = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
}

export default useOverflowEffect