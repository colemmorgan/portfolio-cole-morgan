import FooterScene from "./ui/FooterScene";

export default function Footer() {
  return (
    <footer className="border-dark-100 relative mb-8 h-96 w-full overflow-hidden rounded-md border">
      <FooterScene />
      <div className="flex h-full flex-col justify-between p-6">
        <div className="">
          <p className="text-dark-900 text-3xl italic ins">Cole Morgan</p>
          <p className="text-dark-700 pt-0.5 underline">colemmorgann@gmail.com</p>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-dark-700 text-sm">
            © 2025 Cole Morgan. All rights reserved.
          </p>
          <figure>
            <img src="/icon.png" alt="" className="w-8 h-8"/>
          </figure>
        </div>
      </div>
    </footer>
  );
}
