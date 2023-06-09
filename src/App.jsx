import {
  AtSymbolIcon,
  UserIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { Card, Heading, Input } from "./Components";
import profilePict from "./assets/profile-pict.png";

export default function App() {
  return (
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
          <div className="flex flex-col gap-2 text-center md:gap-4 md:text-left">
            <h1 className="text-3xl font-bold md:text-5xl">
              👋 Hello there! I&apos;m&nbsp;Fauzan
            </h1>
            <h3 className="md:text-xl">I&apos;m a self taught web developer</h3>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="rounded-b-[3rem] bg-gradient-to-b from-transparent to-slate-300 px-6 py-20 md:rounded-b-[5rem]">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <Heading>About</Heading>
          <div className="flex max-w-3xl flex-col gap-4 md:flex-row">
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus asperiores eligendi error sunt! Repellendus eligendi
              nulla, ullam reiciendis, provident corrupti at in libero porro
              incidunt cupiditate dolor fuga. Reprehenderit, inventore!
            </p>
            <p className="flex-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas vel
              consequuntur aliquid eius incidunt at magnam illo fugit. Non
              necessitatibus obcaecati quidem ipsum consequuntur repudiandae
              recusandae labore ut debitis fuga.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="rounded-b-[3rem] bg-gradient-to-b from-transparent to-slate-300 px-6 py-20 md:rounded-b-[5rem]">
        <div className="container mx-auto flex flex-col items-center gap-4">
          <Heading>Projects</Heading>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} />
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

            <button className="flex w-max items-center gap-1 self-end rounded bg-slate-500 px-4 py-2 text-slate-200 shadow-md hover:bg-slate-600">
              Send
              <PaperAirplaneIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
