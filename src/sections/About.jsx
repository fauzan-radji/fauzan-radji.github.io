import { Heading, Highlight } from "../components";

import useAppearOnScroll from "../hooks/useAppearOnScroll";

export default function About() {
  const {
    refs: [aboutHeadingRef, aboutParagraphRef],
    aosClassName,
  } = useAppearOnScroll(2);

  return (
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
          I am an undergraduate student majoring in Informatics Engineering at
          the Universitas Negeri Gorontalo. I have a passion for{" "}
          <Highlight className="delay-700">Android</Highlight> and{" "}
          <Highlight className="delay-[1200ms]">Web development</Highlight>. I
          am a fast learner and always eager to learn new things. With my skills
          and experience, I am confident in my ability to create amazing
          projects.
        </p>
      </div>
    </section>
  );
}
