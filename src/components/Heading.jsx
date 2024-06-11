import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Heading = forwardRef(function Heading({ children, className }, ref) {
  return (
    <h2
      ref={ref}
      className={twMerge(
        "mb-2 text-2xl font-bold text-mandarin-peel",
        className
      )}
    >
      {children}
    </h2>
  );
});

export default Heading;

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
