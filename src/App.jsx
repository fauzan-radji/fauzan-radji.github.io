import { About, Contact, Hero, Projects } from "./sections";

export default function App() {
  return (
    <div className="flex min-h-[100dvh] max-w-full flex-col justify-start overflow-hidden bg-dark-knight text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
