import {
  AtSymbolIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Heading, Input } from "../components";

import useAppearOnScroll from "../hooks/useAppearOnScroll";

export default function Contact() {
  const {
    refs: [contactHeadingRef, contactFormRef],
    aosClassName,
  } = useAppearOnScroll(2);

  return (
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
          <Input name="name" type="text" placeholder="Name" icon={UserIcon} />
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
  );
}
