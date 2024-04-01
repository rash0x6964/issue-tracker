import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

export const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issue", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item) => (
          <Link
            key={item.href}
            className="text-zinc-500 hover:text-zinc-800 transition-colors"	
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
