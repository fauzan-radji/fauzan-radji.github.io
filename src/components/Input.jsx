import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useId } from "react";

export default function Input({
  placeholder,
  icon: Icon,
  type = "text",
  disabled = false,
  className,
  ...props
}) {
  const id = useId();
  return (
    <div className="relative w-full bg-inherit">
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          // FIXME: floating label
          rows={3}
          className={twMerge(
            "peer h-full w-full rounded-md border-2 border-glitchy-shader-blue bg-transparent px-3 py-2 text-white outline-none transition duration-300 placeholder:text-transparent focus:border-empire-yellow disabled:border-glitchy-shader-blue/50 disabled:text-white/50",
            className
          )}
          disabled={disabled}
          {...props}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={twMerge(
            "peer h-full w-full rounded-md border-2 border-glitchy-shader-blue bg-transparent px-3 py-2 text-white outline-none transition duration-300 placeholder:text-transparent focus:border-empire-yellow disabled:border-glitchy-shader-blue/50 disabled:text-white/50",
            className
          )}
          disabled={disabled}
          {...props}
        />
      )}
      <label
        htmlFor={id}
        className={twMerge(
          "absolute left-2 top-0.5 isolate z-20 m-auto flex -translate-y-5 items-center gap-1 px-1 py-2 text-glitchy-shader-blue transition duration-300 before:absolute before:left-0 before:right-0 before:-z-10 before:h-2 before:bg-corbeau peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-glitchy-shader-blue peer-focus:-translate-y-5 peer-focus:text-empire-yellow",
          disabled && "text-glitchy-shader-blue/50"
        )}
      >
        <Icon className="h-4 w-4" />
        {placeholder}
      </label>
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
