import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import { FaLinkedin } from "react-icons/fa6";
import profilePict from "../assets/profile-pict.png";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container mx-auto flex flex-col items-center gap-8 px-6 lg:flex-row-reverse lg:justify-between lg:px-20">
        <div className="relative flex aspect-square w-80 items-center justify-center md:aspect-auto md:h-[28rem]">
          <img
            src={profilePict}
            alt="Fauzan Radji"
            className="absolute bottom-0 ml-4 aspect-[2/3] h-full rounded-b-full object-contain"
          />
        </div>
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="mb-2 whitespace-nowrap text-3xl font-bold text-bright-mint sm:text-4xl md:mb-4 md:text-5xl">
            <span className="text-glitchy-shader-blue">&lt;</span>
            <span className="hidden sm:inline">
              Tri
              <span className="inline-block w-0.5"></span>
              Putra
            </span>
            <span className="inline-block w-0.5"></span>
            Fauzan
            <span className="inline-block w-0.5"></span>
            <span className="hidden sm:inline">
              H<span className="text-lemon-peel">.</span>
            </span>
            <span>Radji</span>{" "}
            <span className="text-glitchy-shader-blue">/&gt;</span>
          </h1>
          <h3 className="mb-8 text-xl sm:text-2xl">
            Web Developer <span className="text-mandarin-peel">|</span> Android
            Developer
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="/resume.pdf"
              download="Fauzan Radji - CV"
              className="flex items-center gap-2 rounded bg-empire-yellow/80 px-4 py-2 text-corbeau shadow-md transition-colors hover:bg-empire-yellow"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/tri-putra-fauzan-h-radji-404810257/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded border border-empire-yellow px-4 py-2 text-inherit shadow-md transition-colors hover:bg-empire-yellow hover:text-corbeau"
            >
              <FaLinkedin className="h-4 w-4" />
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
