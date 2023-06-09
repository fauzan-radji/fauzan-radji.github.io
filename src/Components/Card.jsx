export default function Card() {
  return (
    <div className="w-64 overflow-hidden rounded-xl bg-slate-200 shadow-md shadow-slate-900/20">
      <img
        className="aspect-video object-cover"
        src="/images/placeholder.webp"
        alt="Project 1"
      />

      <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
        <h4 className="font-bold">Project 1</h4>
        <p className="text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          velit ex praesentium nisi deleniti.
        </p>
        <p className="flex gap-2">
          <a
            className="rounded-md bg-slate-300 px-2 py-1 text-xs underline hover:bg-slate-400"
            href="#"
          >
            Demo <></>
          </a>
          <a
            className="rounded-md bg-slate-300 px-2 py-1 text-xs underline hover:bg-slate-400"
            href="#"
          >
            Github <></>
          </a>
        </p>
      </div>
    </div>
  );
}
