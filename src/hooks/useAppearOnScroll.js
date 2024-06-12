import { createRef, useEffect, useMemo, useState } from "react";

import { twMerge } from "tailwind-merge";

export default function useAppearOnScroll(refCount = 1) {
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    setRefs(Array.from({ length: refCount }).map(() => createRef()));
  }, [refCount]);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("appear-from-bottom");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px -20% 0px" }
      ),
    []
  );

  useEffect(() => {
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [observer, refs]);

  return {
    ref: refCount === 1 ? refs[0] : undefined,
    refs,
    aosClassName(c) {
      return twMerge(
        "appear-from-bottom transition-[opacity_linear,transform_ease-out] duration-[1.7s]",
        c
      );
    },
  };
}
