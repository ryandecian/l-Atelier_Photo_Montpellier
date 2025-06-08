// src/hooks/useScrollToHash.ts
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToHash(delay = 100) {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, delay);
    }
  }, [location, delay]);
}
