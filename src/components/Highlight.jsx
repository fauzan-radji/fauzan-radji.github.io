import { useEffect, useMemo, useRef } from "react";

import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export default function Highlight({ children, className }) {
  const ref = useRef(null);

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add("expanded");
            observer.disconnect();
          }
        },
        { threshold: 1, rootMargin: "0px 0px -100px 0px" }
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observer]);

  return (
    <span
      ref={ref}
      className={twMerge(
        "highlight relative isolate before:absolute before:-left-[0.2em] before:bottom-0 before:-z-[1] before:h-[0.4em] before:bg-mandarin-peel/80 before:delay-[inherit]",
        className
      )}
    >
      {children}
    </span>
  );
}

Highlight.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
