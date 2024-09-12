import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Heading, SocialLink } from "../components";

export default function Socials() {
  return (
    <section className="px-6 py-20">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <Heading>Socials</Heading>
        <p>Folow me on social media.</p>
        <div className="mt-4 flex gap-16">
          <SocialLink
            href="https://github.com/fauzan-radji"
            icon={FaGithub}
            label="GitHub"
          />
          <SocialLink
            href="https://www.linkedin.com/in/tri-putra-fauzan-h-radji/"
            icon={FaLinkedin}
            label="LinkedIn"
          />
          <SocialLink
            href="https://www.instagram.com/triputrafauzanradji/"
            icon={FaInstagram}
            label="Instagram"
          />
        </div>
      </div>
    </section>
  );
}
