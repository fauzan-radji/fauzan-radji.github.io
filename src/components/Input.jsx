import PropTypes from "prop-types";
import { useId } from "react";

export default function Input({
  name,
  placeholder,
  icon: Icon,
  type = "text",
}) {
  const id = useId();
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-inherit">
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          // FIXME: floating label
          rows={1}
          name={name}
          className="peer h-full w-full rounded-md border-2 border-slate-500 bg-transparent px-3 py-2 outline-none transition duration-300 placeholder:text-transparent focus:border-slate-700"
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          className="peer h-full w-full rounded-md border-2 border-slate-500 bg-transparent px-3 py-2 outline-none transition duration-300 placeholder:text-transparent focus:border-slate-700"
        />
      )}
      <label
        htmlFor={id}
        className="absolute left-2 z-20 m-auto flex h-2 -translate-y-5 items-center gap-1 bg-inherit px-1 text-slate-500 transition duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-slate-500 peer-focus:-translate-y-5 peer-focus:text-slate-700"
      >
        <Icon className="h-4 w-4" />
        {placeholder}
      </label>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  type: PropTypes.string,
};
