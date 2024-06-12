import { Heading, SimpleIcons } from "../components";

import useAppearOnScroll from "../hooks/useAppearOnScroll";
import { useGlobals } from "../contexts";
import { useRef } from "react";

export default function Skills() {
  const { tools } = useGlobals();

  const {
    refs: [aboutHeadingRef, ...refs],
    aosClassName,
  } = useAppearOnScroll(tools.length + 1);

  const containerRef = useRef(null);

  return (
    <section className="px-6 py-20">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Heading ref={aboutHeadingRef} className={aosClassName()}>
          My Skills
        </Heading>

        <div
          ref={containerRef}
          className="flex max-w-3xl flex-wrap items-center justify-center gap-2"
        >
          {tools.map((tool, index) => (
            <SimpleIcons
              ref={refs[index]}
              key={tool.name}
              name={tool.name}
              slug={tool.slug}
              color={tool.color}
              bg={tool.bg}
              className={aosClassName("text-5xl")}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
