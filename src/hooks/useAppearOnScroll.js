import { createRef, useEffect, useMemo, useRef } from "react";

import { twMerge } from "tailwind-merge";

export default function useAppearOnScroll(refCount = 1) {
  const refs = useRef(Array.from({ length: refCount }).map(() => createRef()));

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("appear-from-bottom");
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0, rootMargin: "0px 0px -20% 0px" }
      ),
    []
  );

  useEffect(() => {
    refs.current.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [observer]);

  return {
    ref: refCount === 1 ? refs.current[0] : undefined,
    refs: refs.current,
    aosClassName(c) {
      return twMerge(
        "appear-from-bottom transition-[opacity_linear,transform_ease-out] duration-[1.7s]",
        c
      );
    },
  };
}
