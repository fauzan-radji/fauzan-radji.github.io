import PropTypes from "prop-types";

export default function Toast({ children }) {
  return (
    <div className="fixed bottom-4 right-4 rounded-md bg-empire-yellow px-4 py-2 text-corbeau shadow-md">
      {children}
    </div>
  );
}

Toast.propTypes = {
  children: PropTypes.node.isRequired,
};
