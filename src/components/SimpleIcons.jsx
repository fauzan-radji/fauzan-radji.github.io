import PropTypes from "prop-types";

export default function SimpleIcons({ name, slug, color }) {
  return (
    <img
      className="w-[1em]"
      src={`https://cdn.simpleicons.org/${slug}/${[color]}`}
      alt={name}
      title={name}
    />
  );
}

SimpleIcons.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
