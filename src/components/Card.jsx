import { FaAndroid, FaGithub, FaGlobe } from "react-icons/fa6";

import PropTypes from "prop-types";
import SimpleIcons from "./SimpleIcons";
import { twMerge } from "tailwind-merge";
import useAppearOnScroll from "../hooks/useAppearOnScroll";

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
 * @param {string} props.web
 * @param {string} props.apk
 * @param {string} props.github
 * @param {Tool[]} props.tools
 * @returns
 */

export default function Card({
  image,
  title,
  description,
  web,
  apk,
  github,
  tools,
  openPreview,
  className,
  style,
}) {
  const { ref, aosClassName } = useAppearOnScroll();

  return (
    <div
      ref={ref}
      className={twMerge(aosClassName("w-72", className))}
      style={style}
    >
      <div
        className="group mb-4 aspect-video w-full cursor-zoom-in overflow-hidden rounded-lg shadow-md"
        onClick={() => openPreview(image)}
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
                className="cursor-pointer rounded border border-empire-yellow/50 px-2 py-1 text-sm text-empire-yellow transition-colors hover:bg-empire-yellow hover:text-dark-knight"
                href={apk}
                download={title}
                title="Download APK"
              >
                <FaAndroid />
              </a>
            )}

            {web && (
              <a
                className="cursor-pointer rounded border border-empire-yellow/50 px-2 py-1 text-sm text-empire-yellow transition-colors hover:bg-empire-yellow hover:text-dark-knight"
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
            <div
              key={tool.name}
              className="rounded-md p-1"
              style={{ backgroundColor: tool.bg }}
            >
              <SimpleIcons
                name={tool.name}
                slug={tool.slug}
                color={tool.color}
              />
            </div>
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
  web: PropTypes.string,
  apk: PropTypes.string,
  github: PropTypes.string,
  tools: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  openPreview: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};
