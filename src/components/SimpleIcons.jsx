import PropTypes from "prop-types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const SimpleIcons = forwardRef(function SimpleIcons(
  { name, slug, color, bg, className, style },
  ref
) {
  return (
    <div
      ref={ref}
      className={twMerge(
        "flex items-center justify-center rounded-[0.25em] p-[0.25em]",
        className
      )}
      style={{
        backgroundColor: bg,
        ...style,
      }}
      title={name}
    >
      <img
        className="w-[1em]"
        src={`https://cdn.simpleicons.org/${slug}/${[color]}`}
        alt={name}
      />
    </div>
  );
});

export default SimpleIcons;

SimpleIcons.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};
