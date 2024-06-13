import PropTypes from "prop-types";

export default function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-6xl text-white hover:text-gray-200"
    >
      <Icon title={label} />
    </a>
  );
}

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
