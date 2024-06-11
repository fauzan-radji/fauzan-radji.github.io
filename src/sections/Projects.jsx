import { Card, Heading, Modal } from "../components";
import { useEffect, useState } from "react";

import useAppearOnScroll from "../hooks/useAppearOnScroll";

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

export default function Projects() {
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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageToPreview, setImageToPreview] = useState("");

  const { ref, aosClassName } = useAppearOnScroll();
  return (
    <>
      <section className="px-6 py-20">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <Heading ref={ref} className={aosClassName()}>
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
