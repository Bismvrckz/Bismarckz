import Link from "next/link";

function Sidenavbar() {
  return (
    <div className="bg-black h-[100%]">
      <ul>
        <li>
          <Link href="/">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
        <li>
          <Link href="/blog/hello-world">
            <a>Blog Post</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidenavbar;
