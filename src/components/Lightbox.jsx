import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Lightbox({ src, isOpen, close }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 cursor-zoom-out items-center justify-center bg-black/50 px-4 py-8 ${
        isOpen ? "flex" : "pointer-events-none hidden"
      }`}
      onClick={close}
    >
      <div
        className="h-full w-full max-w-screen-xl bg-contain bg-center bg-no-repeat shadow-2xl"
        style={{
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
}

Lightbox.propTypes = {
  src: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
