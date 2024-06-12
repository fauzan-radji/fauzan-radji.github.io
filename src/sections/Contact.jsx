import {
  AtSymbolIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Heading, Input } from "../components";

import { ImSpinner8 } from "react-icons/im";
import { twMerge } from "tailwind-merge";
import useAppearOnScroll from "../hooks/useAppearOnScroll";
import { useState } from "react";
import { useToast } from "../contexts";

export default function Contact() {
  const {
    refs: [contactHeadingRef, contactFormRef],
    aosClassName,
  } = useAppearOnScroll(2);

  const pushToast = useToast();

  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setIsSending(true);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyJov8TfaXZtCA_GjFMlVRPmG_x8dE0EqWU0eNewiQjq7wKEd_4p1BH384ppmqg0B-Q9w/exec";

    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then(() => {
        pushToast("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error!", error.message);
        pushToast("An error occurred while sending the message.");
      })
      .finally(() => {
        setIsSending(false);
        e.target.reset();
        setName("");
        setEmail("");
        setMessage("");
      });
  }

  return (
    <section className="px-6 py-20">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Heading ref={contactHeadingRef} className={aosClassName()}>
          Contact Me
        </Heading>
        <form
          ref={contactFormRef}
          onSubmit={handleSubmit}
          className={aosClassName(
            "mx-auto flex w-full max-w-lg flex-col gap-4 rounded-md bg-corbeau px-8 pb-4 pt-8 shadow-md delay-300"
          )}
        >
          <Input
            name="name"
            type="text"
            placeholder="Name"
            icon={UserIcon}
            onChange={(e) => setName(e.target.value)}
            disabled={isSending}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            icon={AtSymbolIcon}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSending}
          />
          <Input
            name="message"
            type="textarea"
            placeholder="Message"
            icon={EnvelopeIcon}
            onChange={(e) => setMessage(e.target.value)}
            disabled={isSending}
          />

          <button
            disabled={isSending || !name || !email || !message}
            className={twMerge(
              "flex w-max cursor-pointer items-center gap-1 self-end rounded bg-empire-yellow/80 px-4 py-2 text-corbeau shadow-md hover:bg-empire-yellow disabled:bg-empire-yellow/60",
              (!name || !email || !message) && "cursor-not-allowed",
              isSending && "cursor-wait"
            )}
          >
            {isSending ? (
              <>
                Sending
                <ImSpinner8 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              <>
                Send
                <PaperAirplaneIcon className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
