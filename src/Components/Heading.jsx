import PropTypes from "prop-types";

export default function Heading({ children }) {
  return <h2 className="mb-2 text-2xl font-bold">{children}</h2>;
}

Heading.propTypes = {
  children: PropTypes.node,
};
