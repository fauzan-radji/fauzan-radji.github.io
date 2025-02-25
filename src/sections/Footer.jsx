export default function Footer() {
  return (
    <footer className="bg-corbeau">
      <div className="container mx-auto py-4">
        <p className="text-center text-sm text-white">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold">Fauzan Radji</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
