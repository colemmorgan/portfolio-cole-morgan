import FooterScene from "./ui/FooterScene";

export default function Footer() {
  return (
    <section className="mt-36 sm:mb-8 sm:px-8">
      <footer className="border-background-tertiary bg-background-primary relative z-40 h-88 w-full overflow-hidden border-t sm:border sm:rounded-md">
        <FooterScene />
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div className="grid gap-1">
            <p className="font-instrument text-2xl italic sm:text-3xl">
              Cole Morgan
            </p>
            <a
              href="https://github.com/colemmorgan/portfolio-cole-morgan"
              target="_blank"
              className="cursor-pointer text-sm underline"
            >
              Source Code
            </a>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-sm">© 2025 Cole Morgan. All rights reserved.</p>
            <figure className="hidden sm:block">
              <img src="/icon.png" alt="" className="h-8 w-8" />
            </figure>
          </div>
        </div>
      </footer>
    </section>
  );
}
