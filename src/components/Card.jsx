import { FaAndroid, FaGithub, FaGlobe, FaNpm } from "react-icons/fa6";

import PropTypes from "prop-types";
import SimpleIcons from "./SimpleIcons";
import { twMerge } from "tailwind-merge";
import useAppearOnScroll from "../hooks/useAppearOnScroll";
import { useLightbox } from "../contexts";

/**
 * @typedef Tool
 * @property {string} name
 * @property {string} slug
 * @property {string} bg
 * @property {string} color
 */

/**
 * @param {object} props
 * @param {string} props.image
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.apk
 * @param {string} props.npm
 * @param {string} props.web
 * @param {string} props.github
 * @param {Tool[]} props.tools
 * @returns
 */

export default function Card({
  image,
  title,
  description,
  apk,
  npm,
  web,
  github,
  tools,
  className,
  style,
}) {
  const { ref, aosClassName } = useAppearOnScroll();
  const lightbox = useLightbox();

  return (
    <div
      ref={ref}
      className={twMerge(aosClassName("w-72", className))}
      style={style}
    >
      <div
        className="group mb-4 aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg shadow-md"
        onClick={() => {
          lightbox.open();
          lightbox.setImageUrl(image);
        }}
      >
        <img
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          src={image}
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h4 className="font-bold text-lemon-peel">{title}</h4>

          <div className="flex items-center gap-2">
            {apk && (
              <a
                className="flex h-6 cursor-pointer items-center rounded border border-empire-yellow/50 px-2 text-sm text-empire-yellow transition-colors hover:bg-empire-yellow hover:text-dark-knight"
                href={apk}
                download={title}
                title="Download APK"
              >
                <FaAndroid />
              </a>
            )}

            {npm && (
              <a
                className="flex h-6 cursor-pointer items-center rounded border border-empire-yellow/50 px-2 text-sm text-empire-yellow transition-colors hover:bg-empire-yellow hover:text-dark-knight"
                href={npm}
                target="_blank"
                rel="noreferrer noopener"
                title="View on NPM"
              >
                <FaNpm className="h-6 w-6" />
              </a>
            )}

            {web && (
              <a
                className="flex h-6 cursor-pointer items-center rounded border border-empire-yellow/50 px-2 text-sm text-empire-yellow transition-colors hover:bg-empire-yellow hover:text-dark-knight"
                href={web}
                target="_blank"
                rel="noreferrer noopener"
                title="Visit Website"
              >
                <FaGlobe />
              </a>
            )}

            {github && (
              <a
                className="cursor-pointer rounded border border-empire-yellow/50 px-2 py-1 text-sm text-empire-yellow transition-colors hover:bg-empire-yellow hover:text-dark-knight"
                href={github}
                target="_blank"
                rel="noreferrer noopener"
                title="View Source Code"
              >
                <FaGithub />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm">{description}</p>
        <div className="flex gap-1">
          {tools.map((tool) => (
            <SimpleIcons
              key={tool.name}
              name={tool.name}
              slug={tool.slug}
              color={tool.color}
              bg={tool.bg}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  apk: PropTypes.string,
  npm: PropTypes.string,
  web: PropTypes.string,
  github: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  className: PropTypes.string,
  style: PropTypes.object,
};
