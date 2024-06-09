import PropTypes from "prop-types";

export default function Modal({ children, isOpen, close }) {
  return (
    <div
      className={`fixed inset-0 z-50 cursor-zoom-out items-center justify-center bg-black/50 px-20 py-10 ${
        isOpen ? "flex" : "pointer-events-none hidden"
      }`}
      onClick={close}
    >
      <div className="h-full w-full">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
