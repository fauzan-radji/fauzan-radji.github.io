import {
  AtSymbolIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Card, Heading, Highlight, Input, Modal } from "./components";
import { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa6";
import profilePict from "./assets/profile-pict.png";
import useAppearOnScroll from "./hooks/useAppearOnScroll";

/**
 * @typedef Project
 * @property {number} id
 * @property {string} image
 * @property {string} title
 * @property {string} description
 * @property {string?} web
 * @property {string?} apk
 * @property {string?} github
 * @property {Tool[]} tools
 */

/**
 * @typedef Tool
 * @property {string} name
 * @property {string} slug
 * @property {string} bg
 * @property {string} color
 */

export default function App() {
  /**
   *  @type {[Project[], React.Dispatch<React.SetStateAction<Project[]>>]}
   */
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then(({ projects, tools }) => {
        setProjects(
          projects.map((project) => ({
            ...project,
            tools: project.tools.map((tool) =>
              tools.find((t) => t.name === tool)
            ),
          }))
        );
      });
  }, []);

  const {
    refs: [
      aboutHeadingRef,
      aboutParagraphRef,
      projectHeadingRef,
      contactHeadingRef,
      contactFormRef,
    ],
    aosClassName,
  } = useAppearOnScroll(5);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToPreview, setImageToPreview] = useState("");

  return (
    <>
      <div className="flex min-h-[100dvh] max-w-full flex-col justify-start overflow-hidden bg-dark-knight text-white">
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
                Web Developer <span className="text-mandarin-peel">|</span>{" "}
                Android Developer
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

        {/* About Section */}
        <section className="px-6 py-20">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <Heading ref={aboutHeadingRef} className={aosClassName()}>
              About
            </Heading>
            <p
              ref={aboutParagraphRef}
              className={aosClassName(
                "max-w-3xl text-center text-xl leading-loose delay-700"
              )}
            >
              I am an undergraduate student majoring in Informatics Engineering
              at the Universitas Negeri Gorontalo. I have a passion for{" "}
              <Highlight className="delay-700">Android</Highlight> and{" "}
              <Highlight className="delay-[1200ms]">Web development</Highlight>.
              I am a fast learner and always eager to learn new things. With my
              skills and experience, I am confident in my ability to create
              amazing projects.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="px-6 py-20">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <Heading ref={projectHeadingRef} className={aosClassName()}>
              Projects
            </Heading>
            <div className="flex flex-wrap items-start justify-center gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  apk={project.apk}
                  web={project.web}
                  github={project.github}
                  tools={project.tools}
                  openPreview={(imageUrl) => {
                    setImageToPreview(imageUrl);
                    setIsModalOpen(true);
                  }}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-6 py-20">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <Heading ref={contactHeadingRef} className={aosClassName()}>
              Contact
            </Heading>
            <form
              ref={contactFormRef}
              onSubmit={(e) => e.preventDefault()}
              className={aosClassName(
                "mx-auto flex w-full max-w-lg flex-col gap-4 rounded-md bg-corbeau px-8 pb-4 pt-8 shadow-md delay-700"
              )}
            >
              <Input
                name="name"
                type="text"
                placeholder="Name"
                icon={UserIcon}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email"
                icon={AtSymbolIcon}
              />
              <Input
                name="message"
                type="textarea"
                placeholder="Message"
                icon={EnvelopeIcon}
              />

              <button className="flex w-max items-center gap-1 self-end rounded bg-empire-yellow/80 px-4 py-2 text-corbeau shadow-md hover:bg-empire-yellow">
                Send
                <PaperAirplaneIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>
      </div>

      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        <img
          className="h-full w-full object-contain"
          src={imageToPreview}
          alt="Preview"
        />
      </Modal>
    </>
  );
}
