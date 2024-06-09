import {
  AtSymbolIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Card, Heading, Input, Modal } from "./components";
import { FaFilePdf, FaGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

import profilePict from "./assets/profile-pict.png";

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

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [imageToPreview, setImageToPreview] = useState("");

  return (
    <>
      <div className="flex min-h-[100dvh] max-w-full flex-col justify-start overflow-x-hidden bg-slate-200 text-slate-950">
        <section className="rounded-b-[3rem] bg-slate-950 py-24 text-slate-50 shadow-xl shadow-slate-500/40 md:rounded-b-[5rem]">
          <div className="container mx-auto flex flex-col items-center gap-8 px-6 landscape:flex-row-reverse landscape:justify-between landscape:px-20">
            <div className="relative flex aspect-square w-80 items-center justify-center md:aspect-auto md:h-[28rem]">
              <svg
                className="absolute bottom-2 aspect-square h-4/5 animate-spin text-slate-600 [animation-duration:64s]"
                viewBox="0 0 900 900"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <g transform="translate(510.88443096263313 386.09160042626115)">
                  <path
                    d="M259.5 -237C329.5 -189.5 374.8 -94.8 360.5 -14.2C346.3 66.3 272.6 132.6 202.6 214.8C132.6 296.9 66.3 395 -23.4 418.4C-113.1 441.8 -226.3 390.6 -320 308.4C-413.8 226.3 -488.1 113.1 -484.8 3.3C-481.5 -106.5 -400.6 -213.1 -306.8 -260.6C-213.1 -308.1 -106.5 -296.5 -5.9 -290.6C94.8 -284.8 189.5 -284.5 259.5 -237"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <img
                src={profilePict}
                alt="Fauzan Radji"
                className="absolute bottom-0 ml-4 aspect-[2/3] h-full rounded-b-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start gap-2 text-center md:gap-4 md:text-left">
              <h1 className="text-3xl font-bold md:text-5xl">
                Tri Putra Fauzan H. Radji
              </h1>
              <h3 className="md:text-xl">Web Developer | Android Developer</h3>
              <div className="flex gap-2">
                <a
                  href="/resume.pdf"
                  download="Fauzan Radji - Resume"
                  className="flex items-center gap-2 rounded bg-slate-500 px-4 py-2 text-slate-200 shadow-md hover:bg-slate-600"
                >
                  Download Resume
                  <FaFilePdf className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/fauzan-radji"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 rounded border border-slate-500 px-4 py-2 text-slate-200 shadow-md hover:bg-slate-600"
                >
                  View GitHub
                  <FaGithub className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="rounded-b-[3rem] bg-gradient-to-b from-transparent to-slate-300 px-6 py-20 md:rounded-b-[5rem]">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <Heading>About</Heading>
            <div className="flex max-w-3xl flex-col gap-4 md:flex-row">
              <p className="flex-1">
                I am a self-taught web developer who is passionate about
                creating web applications that are both beautiful and
                functional. I have experience in building websites using HTML,
                CSS, and JavaScript. I am also familiar with various front-end
                libraries and frameworks, such as React and Tailwind CSS.
              </p>
              <p className="flex-1">
                I am currently looking for opportunities to work on projects
                that will allow me to further develop my skills and gain more
                experience in web development. I am open to collaborating with
                other developers and designers to create innovative and
                user-friendly web applications.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="rounded-b-[3rem] bg-gradient-to-b from-transparent to-slate-300 px-6 py-20 md:rounded-b-[5rem]">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <Heading>Projects</Heading>
            <div className="flex flex-wrap items-start justify-center gap-8">
              {projects.map((project) => (
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
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="rounded-b-[3rem] bg-gradient-to-b from-transparent to-slate-300 px-6 py-20 md:rounded-b-[5rem]">
          <div className="container mx-auto flex flex-col items-center gap-4">
            <Heading>Contact</Heading>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-md bg-slate-200 px-8 pb-4 pt-8 shadow-md"
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

              <button className="flex w-max items-center gap-1 self-end rounded bg-slate-500 px-4 py-2 text-slate-200 shadow-md hover:bg-slate-600">
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
