import { Card, Heading } from "../components";

import useAppearOnScroll from "../hooks/useAppearOnScroll";
import { useGlobals } from "../contexts";

/**
 * @typedef Project
 * @property {number} id
 * @property {string} image
 * @property {string} title
 * @property {string} description
 * @property {string?} apk
 * @property {string?} npm
 * @property {string?} web
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
   *  @type {{projects: Project[]}}
   */
  const { projects } = useGlobals();

  const { ref, aosClassName } = useAppearOnScroll();
  return (
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
              npm={project.npm}
              web={project.web}
              github={project.github}
              tools={project.tools}
              style={{
                transitionDelay: `${(index % 4) * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
