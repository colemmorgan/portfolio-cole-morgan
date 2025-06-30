export default function Nav() {
  return (
    <nav className="text-dark-700 flex items-center justify-between pt-6 text-sm font-medium">
      <figure className="flex items-center gap-2">
        <img src="/icon.png" alt="" className="h-8 w-8 rounded-full" />
        <p className="ins text-xl italic">Cole Morgan</p>
      </figure>
      <ul className="flex gap-4">
        <li>
          <a href="">01. Home</a>
        </li>
        <li>
          <a href="">02. Experience</a>
        </li>
        <li>
          <a href="">03. Projects</a>
        </li>
        <li>
          <a href="">04. Awards</a>
        </li>
      </ul>
    </nav>
  );
}
